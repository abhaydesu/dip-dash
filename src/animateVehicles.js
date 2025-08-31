import * as THREE from "three";
import { metadata as rows } from "./components/Map";
import { maxTileIndex, minTileIndex, tileSize } from "./constants";
import { isGameOn, isGamePaused } from "./pause";
import { position } from "./components/Player";
export const clock = new THREE.Clock();

export function animateVehicles() {
    if (!isGameOn || isGamePaused) return;
    const delta = clock.getDelta();

    rows.forEach((rowData) => {
        if (rowData.type === "car" || rowData.type === "truck") { 
            const begginningOfRow = (minTileIndex - 2) * tileSize;
            const endOfRow = (maxTileIndex + 2) * tileSize;

            rowData.vehicles.forEach(({ ref }) => {
                if (!ref) throw Error("Vehicle reference is missing!");

                const levelFactor = Math.floor(position.currentRow / 50);
                const speedMultiplier = 1 + (levelFactor * 0.25);
                const effectiveSpeed = rowData.speed * speedMultiplier;

                if (rowData.direction) {
                    ref.position.x = ref.position.x > endOfRow ? begginningOfRow : ref.position.x + effectiveSpeed * delta;
                } else { 
                    ref.position.x = ref.position.x < begginningOfRow ? endOfRow : ref.position.x - effectiveSpeed * delta;
                }
            });
        }
    });

}
