import * as THREE from "three";
import { metadata as rows } from "./components/Map";
import { player, position } from "./components/Player";
import { gameOff } from "./pause";

const overlayDOM = document.getElementById('overlay')
const resultDOM = document.getElementById('result-container');
const finalScoreDOM = document.getElementById('final-score');
const retryDOM = document.getElementById('retry');

export function hitTest() {
    const row = rows[position.currentRow - 1];
    if (!row) return;

if (row.type === "car" ||  row.type === "truck") { 
    const playerBoundingBox = new THREE.Box3();
    playerBoundingBox.setFromObject(player);

    row.vehicles.forEach(({ ref }) => {
        if (!ref) throw Error("Vehicle reference is missing!");

        const vehicleBoundingBox = new THREE.Box3();
        vehicleBoundingBox.setFromObject(ref);

        if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
            gameOff();
            if (!resultDOM || !finalScoreDOM) return;
            retryDOM.focus();
            resultDOM.style.visibility = "visible";
            overlayDOM.style.visibility = "visible";
        }
    });
}
}