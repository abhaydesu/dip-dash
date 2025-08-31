import * as THREE from "three";

export function Wheel(x) {
    const wheel = new THREE.Mesh(
        new THREE.BoxGeometry(12, 33, 25),
        new THREE.MeshLambertMaterial({
            color: 0x333333,
            flatShading: true
        })
    );
    wheel.position.x = x;
    wheel.position.y = 1;
    return wheel;
}