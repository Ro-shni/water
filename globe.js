// Create a scene
import * as THREE from 'three';

const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

// Create a sphere (globe) and add it to the scene
const geometry = new THREE.SphereGeometry(2, 32, 32);
const texture = new THREE.TextureLoader().load('globe.jpg'); // Replace with your own texture
const material = new THREE.MeshBasicMaterial({ map: texture });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Add ambient light
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// Create a function to animate the globe
const animate = () => {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.002;
    renderer.render(scene, camera);
};

// Start the animation
animate();

