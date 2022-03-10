let myMesh;
let head;
let face;
//import MyControls from './myControls'

function createEnvironment(scene) {
  console.log("Adding environment");
  // let mefi = new THREE.Fog();
  // mefi.color.set('rgb(50,50,50)')
  // scene.add(mefi);
  var fogColor = new THREE.Color('rgb(70,70,50)');
    //scene.background = fogColor; // Setting fogColor as the background color also
    scene.fog = new THREE.Fog(fogColor, 1, 50);

    // const headModel = new THREE.GLTFLoader();
    // const headTexture = new THREE.TextureLoader();
    // headTexture.flipY = false;
		// headModel.load( "assets/head.glb", ( gltf ) => {
    //   console.log(headModel);
    //   head = gltf.scene;
    //   head.traverse((o) => {
    //         if (o.isMesh) {
    //             o.material = new THREE.MeshBasicMaterial();
    //         }
    //     });
		// 	scene.add(head);
		// 	} );

    //   const faceModel = new THREE.GLTFLoader();
    //   const faceTexture = new THREE.TextureLoader().load("../assets/face1.png");
    //   faceTexture.flipY = false;
    //   //faceTexture.repeat.set(0.5,0.5);
    //   faceModel.load( "assets/face.glb", ( gltf ) => {
    //     console.log(faceModel);
    //     face = gltf.scene;
    //     face.traverse((o) => {
    //           if (o.isMesh) {
    //               o.material = new THREE.MeshBasicMaterial({side: THREE.FrontSide, map:faceTexture});
    //           }
    //       });
    //     scene.add( face );
    //     } );

  // let texture1 = new THREE.TextureLoader().load("../assets/fog.png");
  // let myGeometry1 = new THREE.TorusGeometry(8,1.7,16,100,5.5);
  // //let myMaterial1 = new THREE.MeshBasicMaterial({map: texture1});
  // let mat1 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,map: texture1});
  // //myMesh1 = new THREE.Mesh(myGeometry1,myMaterial1);
  // myMesh1 = new THREE.Mesh(myGeometry1,mat1);
  // myMesh1.position.set(-10,1.5,10);
  // myMesh1.rotation.set(1.57,0,-0.3);
  // myMesh1.layers.enable(3);
  // scene.add(myMesh1);
}


function updateEnvironment(azz,ayy) {
  //myMesh.position.x += 0.01;
  
  // head.rotation.y = azz;
  // head.rotation.z = ayy;
  // face.rotation.y = head.rotation.y;
  // face.rotation.z = head.rotation.z;
  
}