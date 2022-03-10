/*
 *
 * This uses code from a THREE.js Multiplayer boilerplate made by Or Fleisher:
 * https://github.com/juniorxsound/THREE.Multiplayer
 * And a WEBRTC chat app made by Mikołaj Wargowski:
 * https://github.com/Miczeq22/simple-chat-app
 *
 * Aidan Nelson, April 2020
 *
 *
 */

// express will run our server
const express = require("express");

const {MongoClient} =require("mongodb");

const app = express();
app.use(express.static("public"));

// HTTP will expose our server to the web
const http = require("http").createServer(app);

// decide on which port we will use
const port = process.env.PORT || 8080;

//Server
const server = app.listen(port);
console.log("Server is running on http://localhost:" + port);

/////SOCKET.IO///////
const io = require("socket.io")().listen(server);

// an object where we will store innformation about active clients
let peers = {};
let colorSetting = {};

function main() {
  setupSocketServer();

  setInterval(function () {
    // update all clients of positions
    io.sockets.emit("positions", peers);
  }, 10);
}

main();

function setupSocketServer() {
  // Set up each socket connection
  io.on("connection", (socket) => {
    console.log(
      "Peer joined with ID",
      socket.id,
      ". There are " +
      io.engine.clientsCount +
      " peer(s) connected."
    );

    //Add a new client indexed by their socket id
    peers[socket.id] = {
      position: [0, 0.5, 0],
      rotation: [0, 0, 0, 1], // stored as XYZW values of Quaternion
    };

    colorSetting[socket.id]={
      skin:'#F0F5F6',
      cloth:"assets/clothY.png",
      head:'#FFFFFF',
    }

    // Make sure to send the client their ID and a list of ICE servers for WebRTC network traversal
    socket.emit(
      "introduction",
      Object.keys(peers),
      colorSetting
    );

    // also give the client all existing clients positions:
    socket.emit("userPositions", peers);

    //Update everyone that the number of users has changed
    io.emit(
      "newUserConnected",
      socket.id
    );

    // whenever the client moves, update their movements in the clients object
    socket.on("move", (data) => {
      if (peers[socket.id]) {
        peers[socket.id].position = data[0];
        peers[socket.id].rotation = data[1];
      }
    });

    socket.on("color",(data)=>{
      if (colorSetting[socket.id]){
        colorSetting[socket.id] = data;
      }
    });

    // Relay simple-peer signals back and forth
    socket.on("signal", (to, from, data) => {
      if (to in peers) {
        io.to(to).emit("signal", to, from, data);
      } else {
        console.log("Peer not found!");
      }
    });

    //Handle the disconnection
    socket.on("disconnect", () => {
      //Delete this client from the object
      delete peers[socket.id];
      io.sockets.emit(
        "userDisconnected",
        io.engine.clientsCount,
        socket.id,
        Object.keys(peers)
      );
      console.log(
        "User " +
        socket.id +
        " diconnected, there are " +
        io.engine.clientsCount +
        " clients connected"
      );
    });
  });
}



//only in node module,not other js file
//var MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";


function signup(){
  var clientInfo = {};
  var clientID = {};
  var update = false;
  clientID.id = document.getElementById('Id').value;
  clientInfo.id = document.getElementById('Id').value;
  clientInfo.password = document.getElementById('Password').value;
  console.log(clientInfo);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    //var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").find({clientID}).toArray(function(err,result){
      if (err) throw err;
      console.log(result);
      if(result){
        update = false;
      }else{
        update = true;
      }
      db.close();
    })
    if(update){
      dbo.collection("customers").insertOne(clientInfo, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    }
  });
};