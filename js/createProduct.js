import * as THREE from 'three';

export function createProduct() {
    // Create a group to hold all parts
    const robot = new THREE.Group();

    // Materials
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a4a4a,
        metalness: 0.7,
        roughness: 0.3
    });

    const jointMaterial = new THREE.MeshStandardMaterial({
        color: 0x2196F3,
        metalness: 0.5,
        roughness: 0.5
    });

    // Body
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 2, 1),
        bodyMaterial
    );
    body.position.y = 2;
    body.castShadow = true;
    body.name = "Robot Body";
    robot.add(body);

    // Head
    const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        bodyMaterial
    );
    head.position.y = 3.5;
    head.castShadow = true;
    head.name = "Robot Head";
    robot.add(head);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        emissive: 0x00ff00,
        emissiveIntensity: 0.5
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 3.5, 0.4);
    leftEye.name = "Left Eye";
    robot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 3.5, 0.4);
    rightEye.name = "Right Eye";
    robot.add(rightEye);

    // Arms
    function createArm(side) {
        const arm = new THREE.Group();
        const multiplier = side === 'left' ? 1 : -1;

        const upperArm = new THREE.Mesh(
            new THREE.CylinderGeometry(0.2, 0.2, 1.2),
            bodyMaterial
        );
        upperArm.position.y = -0.6;
        upperArm.castShadow = true;
        upperArm.name = `${side === 'left' ? 'Left' : 'Right'} Upper Arm`;
        arm.add(upperArm);

        const joint = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 32, 32),
            jointMaterial
        );
        joint.position.y = -1.2;
        joint.castShadow = true;
        joint.name = `${side === 'left' ? 'Left' : 'Right'} Elbow`;
        arm.add(joint);

        const forearm = new THREE.Mesh(
            new THREE.CylinderGeometry(0.15, 0.15, 1),
            bodyMaterial
        );
        forearm.position.y = -1.7;
        forearm.castShadow = true;
        forearm.name = `${side === 'left' ? 'Left' : 'Right'} Forearm`;
        arm.add(forearm);

        arm.position.set(multiplier * 0.9, 2.5, 0);
        return arm;
    }

    const leftArm = createArm('left');
    const rightArm = createArm('right');
    robot.add(leftArm, rightArm);

    // Legs
    function createLeg(side) {
        const leg = new THREE.Group();
        const multiplier = side === 'left' ? 1 : -1;

        const upperLeg = new THREE.Mesh(
            new THREE.CylinderGeometry(0.25, 0.25, 1.5),
            bodyMaterial
        );
        upperLeg.position.y = -0.75;
        upperLeg.castShadow = true;
        upperLeg.name = `${side === 'left' ? 'Left' : 'Right'} Upper Leg`;
        leg.add(upperLeg);

        const knee = new THREE.Mesh(
            new THREE.SphereGeometry(0.25, 32, 32),
            jointMaterial
        );
        knee.position.y = -1.5;
        knee.castShadow = true;
        knee.name = `${side === 'left' ? 'Left' : 'Right'} Knee`;
        leg.add(knee);

        const lowerLeg = new THREE.Mesh(
            new THREE.CylinderGeometry(0.2, 0.2, 1.5),
            bodyMaterial
        );
        lowerLeg.position.y = -2.25;
        lowerLeg.castShadow = true;
        lowerLeg.name = `${side === 'left' ? 'Left' : 'Right'} Lower Leg`;
        leg.add(lowerLeg);

        const foot = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.2, 0.6),
            bodyMaterial
        );
        foot.position.y = -3.1;
        foot.position.z = 0.1;
        foot.castShadow = true;
        foot.name = `${side === 'left' ? 'Left' : 'Right'} Foot`;
        leg.add(foot);

        leg.position.set(multiplier * 0.4, 1, 0);
        return leg;
    }

    const leftLeg = createLeg('left');
    const rightLeg = createLeg('right');
    robot.add(leftLeg, rightLeg);

    return robot;
}