import * as THREE from 'three';

export function setupInteraction(scene, camera, product) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let previousHighlight = null;
    const infoPanel = document.getElementById('info-panel');

    // Material for highlighting
    const highlightMaterial = new THREE.MeshStandardMaterial({
        color: 0xff9900,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0xff9900,
        emissiveIntensity: 0.2
    });

    function onMouseMove(event) {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(product.children, true);

        // Reset previous highlight if exists
        if (previousHighlight) {
            previousHighlight.object.material = previousHighlight.material;
            previousHighlight = null;
            infoPanel.style.display = 'none';
        }

        // Highlight the first intersected object
        if (intersects.length > 0) {
            const intersected = intersects[0];
            if (intersected.object.material) {
                previousHighlight = {
                    object: intersected.object,
                    material: intersected.object.material
                };
                intersected.object.material = highlightMaterial;

                // Show info panel
                infoPanel.textContent = intersected.object.name || 'Robot Part';
                infoPanel.style.display = 'block';
                infoPanel.style.left = event.clientX + 10 + 'px';
                infoPanel.style.top = event.clientY + 10 + 'px';
            }
        }
    }

    // Add event listener
    window.addEventListener('mousemove', onMouseMove);
}