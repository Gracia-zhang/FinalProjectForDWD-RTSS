var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

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