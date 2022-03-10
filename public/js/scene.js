/*
 *
 * This uses code from a THREE.js Multiplayer boilerplate made by Or Fleisher:
 * https://github.com/juniorxsound/THREE.Multiplayer
 * Aidan Nelson, April 2020
 *
 */


class Scene {
  constructor() {
    //THREE scene
    this.scene = new THREE.Scene();

    //Utility
    this.width = window.innerWidth*0.7;
    this.height = window.innerHeight * 0.7;
    

    // lerp value to be used when interpolating positions and rotations
    this.lerpValue = 0;

    //THREE Camera
    this.camera = new THREE.PerspectiveCamera(
      50,
      this.width / this.height,
      0.1,
      5000
    );
    this.camera.position.set(0, 3, 0);
    this.scene.add(this.camera);

    // create an AudioListener and add it to the camera
    this.listener = new THREE.AudioListener();
    this.camera.add(this.listener);

    //THREE WebGL renderer
    this.renderer = new THREE.WebGLRenderer({
      antialiasing: true,
    });
    this.renderer.setClearColor(new THREE.Color("lightblue"));
    this.renderer.setSize(this.width, this.height);

    // add controls:
    //this.controls = new myControls(this.scene,  this.camera, this.renderer);
    this.controls = new MyControls(this.camera);
    this.azz;
    this.ayy;
    //Push the canvas to the DOM
    let domElement = document.getElementById("canvas-container");
    domElement.append(this.renderer.domElement);

    //Setup event listeners for events and handle the states
    window.addEventListener("resize", (e) => this.onWindowResize(e), false);

    // Helpers
    //this.scene.add(new THREE.GridHelper(500, 500));
    //this.scene.add(new THREE.AxesHelper(10));

    this.addLights();
    createEnvironment(this.scene);

    //raycaster
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    document.addEventListener

    // this.addModel();


    // Start the loop
    this.frameCount = 0;
    this.update();
  }

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  // Lighting 💡

  addLights() {
    this.scene.add(new THREE.AmbientLight(0xffffe6, 0.7));
  }
  //////////////////////////////////////////////////////////////////////
  //model
  addModel(colorSetting){
    let clothColor;
    if(colorSetting.cloth = 'assets/clothY.png'){
      clothColor = '#FFE043'
    }else{
      clothColor = '#85AAE7'
    }
    const clothModel = new THREE.GLTFLoader();
    // const clothTexture = new THREE.TextureLoader().load("../assets/cloth1.png");
    //clothTexture.flipY = false;
		clothModel.load( "assets/cloth.glb", ( gltf ) => {
      //console.log(clothModel);
      var cloth = gltf.scene;
        cloth.traverse((o) => {
            if (o.isMesh) {
                o.material = new THREE.MeshBasicMaterial();
                o.material.color.set(clothColor)
            }
        });
			this.scene.add(cloth);
			} );

    const skinModel = new THREE.GLTFLoader();
    // const skinTexture = new THREE.TextureLoader().load("../assets/skin1.png");
    // skinTexture.flipY = false;
		skinModel.load( "assets/skin.glb", ( gltf ) => {
      //console.log(skinModel);
      var skin = gltf.scene;
        skin.traverse((o) => {
            if (o.isMesh) {
                o.material = new THREE.MeshBasicMaterial(
                  // {map:skinTexture}
                  );
                o.material.color.set(colorSetting.skin)
            }
        });
			this.scene.add(skin);
			} );

      // const bgModel = new THREE.GLTFLoader();
      // const bgTexture = new THREE.TextureLoader().load("../assets/skin4.png");
      // bgTexture.flipY = false;
      // bgModel.load( "assets/background.glb", ( gltf ) => {
      //   console.log(bgModel);
      //   var bg = gltf.scene;
      //   bg.traverse((o) => {
      //         if (o.isMesh) {
      //             o.material = new THREE.MeshBasicMaterial({side: THREE.FrontSide, map:bgTexture});
      //         }
      //     });
      //   this.scene.add( bg );
      //   } );

      const tableModel = new THREE.GLTFLoader();
      const tableTexture = new THREE.TextureLoader();
      tableTexture.flipY = false;
      tableModel.load( "assets/table.glb", ( gltf ) => {
        console.log(tableModel);
        var table = gltf.scene;
        table.traverse((o) => {
              if (o.isMesh) {
                  o.material = new THREE.MeshBasicMaterial();
              }
          });
        this.scene.add( table );
        } );
  }

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  // Clients 👫

  // add a client meshes, a video element and  canvas for three.js video texture
  addClient(id,colorSetting) {//put models inside
    // let videoMaterial = makeVideoMaterial(id);//video material
    // let otherMat = new THREE.MeshNormalMaterial();

    // let head1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), [otherMat,otherMat,otherMat,otherMat,otherMat,videoMaterial]);

    // // set position of head before adding to parent object
    // head1.position.set(0, 0, 0);

    let head;
    let face;
    //let headColor = colorSetting.head;

    var group = new THREE.Group();

    console.log(colorSetting)
    const headModel = new THREE.GLTFLoader();
    const headTexture = new THREE.TextureLoader();
    headTexture.flipY = false;
		headModel.load( "assets/head.glb", ( gltf ) => {
      console.log(headModel);
      head = gltf.scene;
      head.traverse((o) => {
            if (o.isMesh) {
                o.material = new THREE.MeshBasicMaterial();
               // o.material.color.set(headColor);
            }
        });
        head.rotation.set(0,1.57,0);
        head.position.set(0,-10,0);
        group.add(head);
			} );

      const faceModel = new THREE.GLTFLoader();
      const faceTexture = new THREE.TextureLoader().load("../assets/face1.png");
      faceTexture.flipY = false;
      //faceTexture.repeat.set(0.5,0.5);
      faceModel.load( "assets/face.glb", ( gltf ) => {
        console.log(faceModel);
        face = gltf.scene;
        face.traverse((o) => {
              if (o.isMesh) {
                  o.material = new THREE.MeshBasicMaterial({side: THREE.FrontSide, map:faceTexture});
              }
          });          
          face.rotation.set(0,1.57,0);
          face.position.set(0,-10,0);
          group.add(face);
        } );

    // https://threejs.org/docs/index.html#api/en/objects/Group
  
    // add group to scene

    this.scene.add(group);

    peers[id].group = group;
    
    peers[id].previousPosition = new THREE.Vector3();
    peers[id].previousRotation = new THREE.Quaternion();
    peers[id].desiredPosition = new THREE.Vector3();
    peers[id].desiredRotation = new THREE.Quaternion();
  }

  removeClient(id) {
    this.scene.remove(peers[id].group);
  }

  // overloaded function can deal with new info or not
  updateClientPositions(clientProperties) {
    this.lerpValue = 0;
    for (let id in clientProperties) {
      if (id != mySocket.id) {
        peers[id].previousPosition.copy(peers[id].group.position);
        peers[id].previousRotation.copy(peers[id].group.quaternion);
        peers[id].desiredPosition = new THREE.Vector3().fromArray(
          clientProperties[id].position
        );
        peers[id].desiredRotation = new THREE.Quaternion().fromArray(
          clientProperties[id].rotation
        );
      }
    }
  }

  interpolatePositions() {
    this.lerpValue += 0.1; // updates are sent roughly every 1/5 second == 10 frames
    for (let id in peers) {
      if (peers[id].group) {
        peers[id].group.position.lerpVectors(peers[id].previousPosition,peers[id].desiredPosition, this.lerpValue);
        peers[id].group.quaternion.slerpQuaternions(peers[id].previousRotation,peers[id].desiredRotation, this.lerpValue);
      }
    }
  }

  updateClientVolumes() {
    for (let id in peers) {
      let audioEl = document.getElementById(id + "_audio");
      if (audioEl && peers[id].group) {
        let distSquared = this.camera.position.distanceToSquared(
          peers[id].group.position
        );

        if (distSquared > 500) {
          audioEl.volume = 0;
        } else {
          // from lucasio here: https://discourse.threejs.org/t/positionalaudio-setmediastreamsource-with-webrtc-question-not-hearing-any-sound/14301/29
          let volume = Math.min(1, 10 / distSquared);
          audioEl.volume = volume;
        }
      }
    }
  }

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  // Interaction 🤾‍♀️

  getPlayerPosition() {
    // TODO: use quaternion or are euler angles fine here?
    return [
      [
        this.camera.position.x+20,
        this.camera.position.y,
        this.camera.position.z,
      ],
      [
        this.camera.quaternion._x,
        this.camera.quaternion._y,
        this.camera.quaternion._z,
        this.camera.quaternion._w,
      ],
    ];
  }

  getAzz(){
    this.azz = this.controls.az;
    this.ayy = this.controls.ay;
    //console.log(this.azz);
    return this.azz;
  }

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  // Rendering 🎥

  update() {
    requestAnimationFrame(() => this.update());
    this.frameCount++;

    updateEnvironment(this.azz,this.ayy);

    if (this.frameCount % 25 === 0) {
      this.updateClientVolumes();
    }
    

    this.interpolatePositions();
    this.controls.update();
    this.getAzz();
    //console.log(this.azz);
    this.render();
  }
  performRaycasterInteractions(){
    console.log("raycaster!");
    
    onmousemove();
  }

  onMouseMove(){
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  // Event Handlers 🍽

  onWindowResize(e) {
    this.width = window.innerWidth*0.7;
    this.height = Math.floor(window.innerHeight * 0.7);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Utilities

function makeVideoMaterial(id) {
  let videoElement = document.getElementById(id + "_video");
  let videoTexture = new THREE.VideoTexture(videoElement);

  let videoMaterial = new THREE.MeshBasicMaterial({
    map: videoTexture,
    overdraw: true,
    side: THREE.DoubleSide,
  });

  return videoMaterial;
}
