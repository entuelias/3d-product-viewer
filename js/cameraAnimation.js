import * as THREE from 'three';

export function setupCameraAnimation(camera) {
    const radius = 8;
    let angle = 0;
    const speed = 0.001;
    const centerPoint = new THREE.Vector3(0, 0, 0);
    let isAutoRotating = true;

    // Toggle auto-rotation on spacebar press
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            isAutoRotating = !isAutoRotating;
        }
    });

    function update() {
        if (!isAutoRotating) return;

        // Update angle
        angle += speed;

        // Calculate new camera position
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        camera.position.x = x;
        camera.position.z = z;

        // Keep camera looking at center
        camera.lookAt(centerPoint);
    }

    return { update };
}