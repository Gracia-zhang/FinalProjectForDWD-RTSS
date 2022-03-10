console.log('hello controls');

class MyControls {
    constructor(camera) {
        // set up my controls
        this.camera = camera;
        this.camera.position.set(-20,10,0);
        this.lat = 0;
        this.phi = 0;
        this.theta = 0;
        this.camera.target = new THREE.Vector3(0, 8, 0)
        this.camera.lookAt(this.camera.target);
        this.az;
        this.ay;

        this.keys = {};
        document.body.addEventListener('keydown',(ev) => {
            this.keys[ev.key] = true;
        } )
        document.body.addEventListener('keyup',(ev) => {
            this.keys[ev.key] = false;
        } )
    }

    update(avatar){
        //avatar.position.set(this.camera.position.x,0,this.camera.position.z);
        //console.log('controls updating okay!');
        // console.log('KEYS: ',this.keys);
        

        if (this.keys["q"]) {
            this.camera.position.x -= 0.1;
            
        }

        if (this.keys["w"]) {
            if(this.camera.target.y < 11){
            this.camera.target.y += 0.1;
            //console.log(this.camera.target);
            }
            this.camera.lookAt(this.camera.target);
            
        }
        if (this.keys["a"]) {
            if(this.camera.target.z > -5){
            this.camera.target.z -= 0.1;
            //console.log(this.camera.target);
            }
            this.camera.lookAt(this.camera.target);
        }
        if (this.keys["s"]) {
            if(this.camera.target.y > 6){
            this.camera.target.y -= 0.1;
            //console.log(this.camera.target);
            }
            this.camera.lookAt(this.camera.target);
        }
        if (this.keys["d"]) {
            if(this.camera.target.z < 5){
            this.camera.target.z += 0.1;
            //console.log(this.camera.target);
            }
            this.camera.lookAt(this.camera.target);
            //this.camera.position.x += 0.1;
        }
        
        this.az = Math.atan(this.camera.target.z/this.camera.position.x);
        this.ay = Math.atan((this.camera.target.y-8)/this.camera.position.x);
        
    }
}