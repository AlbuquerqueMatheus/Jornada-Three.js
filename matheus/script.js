import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import gsap from 'gsap';
//canvas
const canvas = document.querySelector('.webgl');

//scene
const scene = new THREE.Scene();

//Axes Helper
const axesHelper = new THREE.AxesHelper(3); 
scene.add(axesHelper);

const debugObject ={}
debugObject.color = 'red';

// criando um objeto
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: debugObject.color});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

debugObject.spin = () => {
    gsap.to(mesh.rotation, { duration:5, y: mesh.rotation.y + Math.PI * 2});
};

//GUI
const gui = new GUI();

gui.add(debugObject, 'spin');

gui
    .addColor(debugObject, 'color')
    .onChange((value) => {
        material.color.set(debugObject.color);
    });

gui.add(mesh.position, 'y', -3, 3, 0.01).min(-3).max(3).step(0.01).name('Elevation');

gui.add(mesh, 'visible');
gui.add(material, 'wireframe');

//cursor
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
});

//camera
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//resize
window.addEventListener('resize', () => {
    //update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    
    //update renderer
    renderer.setSize(sizes.width, sizes.height);
})

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

const tick = () => {
    //clock
    const elapsedTime = clock.getElapsedTime();
   
    //Update controls
    controls.update();
    
    //render
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
tick();

