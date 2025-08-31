import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components/DirectionalLight";
import { player, initializePlayer } from "./components/Player";
import { map, initializeMap } from "./components/Map";
import { animateVehicles } from "./animateVehicles";
import { animatePlayer } from "./animatePlayer";
import { hitTest } from "./hitTest";
import { gameOn, isGamePaused, togglePause } from "./pause";
import "./style.css";
import "./collectUserInput";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
dirLight.target = player;
player.add(dirLight);

const camera = Camera();
player.add(camera);

const retryDOM = document.getElementById('retry');
const overlayDOM = document.getElementById('overlay');
const scoreDOM = document.getElementById("score");
const resultDOM = document.getElementById("result-container");

initializeGame();

retryDOM.addEventListener("click", initializeGame);
retryDOM.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        initializeGame();
    }
});

function initializeGame() {
  initializePlayer();
  initializeMap();
  
  gameOn();
  if (scoreDOM) scoreDOM.innerText = "0";
  if (resultDOM) resultDOM.style.visibility = "hidden";
  if (overlayDOM) overlayDOM.style.visibility = "hidden";
}

const pauseScreen = document.getElementById("pause-screen");
const resumeBtn = document.getElementById("resume-btn");

resumeBtn.addEventListener("click", () => {
  togglePause()
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    togglePause();
  }
});


const renderer = Renderer();

if (!isGamePaused)  renderer.setAnimationLoop(animate);

function animate() {

  animateVehicles();
  animatePlayer();
  hitTest();

  renderer.render(scene, camera);
}
