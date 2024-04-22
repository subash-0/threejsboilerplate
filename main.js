import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
)
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfffffff);
document.body.appendChild(renderer.domElement);
camera.position.set(0,15,-22);
const scene = new THREE.Scene();

const orbit = new OrbitControls(camera, renderer.domElement)
orbit.update();

const ambientLight = new THREE.AmbientLight(0xffffff,20);
scene.add(ambientLight);

const gridHelper = new THREE.GridHelper(20,20);
scene.add(gridHelper)

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);



function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera);
}
animate();




window.addEventListener('resize',(e)=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

