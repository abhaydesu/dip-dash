import * as THREE from "three";
import { metadata as rows } from "./components/Map";
import { isGameOn, maxTileIndex, minTileIndex, tileSize } from "./constants";

const clock = new THREE.Clock();

export function animateVehicles() {
    if (isGameOn) {
    const delta = clock.getDelta();

    rows.forEach((rowData) => {
        if (rowData.type === "car" || rowData.type === "truck") { 
            const begginningOfRow = (minTileIndex - 2) * tileSize;
            const endOfRow = (maxTileIndex + 2) * tileSize;

            rowData.vehicles.forEach(({ ref }) => {
                if (!ref) throw Error("Vehicle reference is missing!");

                if (rowData.direction) {
                    ref.position.x = ref.position.x > endOfRow ? begginningOfRow : ref.position.x + rowData.speed * delta;
                } else { 
                    ref.position.x = ref.position.x < begginningOfRow ? endOfRow : ref.position.x - rowData.speed * delta;
                }
            });
        }
    });
}
}
