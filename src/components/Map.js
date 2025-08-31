import * as THREE from "three";
import { generateRows } from "../utilities/generateRows";
import { Road } from "./Road";
import { Grass } from "./Grass";
import { Tree } from "./Tree";
import { Truck } from "./Truck"
import { Car} from "./Car";

export const metadata = [];

export const map = new THREE.Group();

export function initializeMap() {
    for (let rowIndex = 0; rowIndex > -5; rowIndex--) {
        const grass = Grass(rowIndex);
        map.add(grass);
    }
    addRows();
}

export function addRows() {
    const newMetaData = generateRows(20);

    const startIndex = metadata.length;
    metadata.push(...newMetaData);

    newMetaData.forEach((rowData, index) => {
        const rowIndex = startIndex + index + 1;

        if (rowData.type === "forest") {
            const row = Grass(rowIndex);

            rowData.trees.forEach(({tileIndex, height}) => {
                const tree = Tree(tileIndex, height);
                row.add(tree);
            });

            map.add(row);
        }

        if (rowData.type === "car") {
            const row = Road(rowIndex);

            rowData.vehicles.forEach((vehicle) => {
                const car = Car(
                    vehicle.initialTileIndex,
                    rowData.direction,
                    vehicle.color
                );
                vehicle.ref = car;
                row.add(car);
            });

            map.add(row);
        }

        if (rowData.type === "truck") { 
            const row = Road(rowIndex);

            rowData.vehicles .forEach((vehicle) => {
                const truck = Truck(
                    vehicle.initialTileIndex, 
                    rowData.direction,
                    vehicle.color
                );
                vehicle.ref = truck;
                row.add(truck);
            });

            map.add(row);
        }
    });
}