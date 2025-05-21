import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { setupCameraAnimation } from './cameraAnimation.js';

// Initialize scene, camera, and renderer
const { scene, camera, renderer } = initScene();

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Create product and add to scene
const product = createProduct();
scene.add(product);

// Add lighting
addLighting(scene);

// Setup interaction
setupInteraction(scene, camera, product);

// Setup camera animation
const cameraAnimator = setupCameraAnimation(camera);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Update controls
    controls.update();
    
    // Update camera animation
    cameraAnimator.update();
    
    // Render scene
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animation loop
animate();