import * as THREE from "three";

const moveClock = new THREE.Clock(false);

export function getMoveClock() {
  return moveClock;
}

export function resetMoveClock() {
    moveClock.stop();
    moveClock.elapsedTime = 0;
}