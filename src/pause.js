import { clock } from "./animateVehicles";

export let isGameOn = true;
export function gameOn() {
    isGameOn = true;
}
export function gameOff() {
    isGameOn = false;
}

export let isGamePaused = false;
export function togglePause() {
  isGamePaused = !isGamePaused;

  if (!isGamePaused) {
    clock.getDelta(); 
  }

  document.getElementById('pause-screen').style.display = isGamePaused ? "flex" : "none";
}
