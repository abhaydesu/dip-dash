import * as THREE from "three";

export const player = Player();

function Player() {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(15,15,20),
        new THREE.MeshLambertMaterial({
            color:"white",
            flatShading: true
        })
    );
    body.position.z = 10;
    body.castShadow = true;
    body.receiveShadow = true;

    return body;
}