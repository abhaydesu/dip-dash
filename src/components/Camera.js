import * as THREE from "three";

export function Camera() {
    const size = 300; 
    const aspect = window.innerWidth / window.innerHeight;

    let width = size * aspect;
    let height = size;

    const camera = new THREE.OrthographicCamera(
        -width / 2,   // left
        width / 2,    // right
        height / 2,   // top
        -height / 2,  // bottom
        100,          // near
        900           // far
    );

    camera.up.set(0, 0, 1);
    camera.position.set(300, -300, 300);
    camera.lookAt(0, 0, 0);

    return camera;
}
