import * as THREE from "three";
import { Road } from "./Road";
import { Grass } from "./Grass";
import { Tree } from "./Tree";
import { Truck } from "./Truck"
import { Car} from "./Car";

export const metadata = [
    {
        type: "car",
        direction: false,
        speed: 80,
        _vehicles: [{ initialTileIndex: 2, color: 0xff0000 }],
        get vehicles() {
            return this._vehicles;
        },
        set vehicles(value) {
            this._vehicles = value;
        },
    },
    {
        type: "forest",
        trees : [
            { tileIndex: -3, height: 50},
            { tileIndex: 2, height: 30},
            { tileIndex: -5, height: 50},
        ]
    },
    {
        type: "truck",
        direction: true, 
        speed: 65,
        vehicles: [{ initialTileIndex: -4, color: 0x00ff00}]
    },
    {
        type: "forest",
        trees : [
            { tileIndex: -2, height: 30},
            { tileIndex: 4, height: 40},
        ]
    }
]

export const map = new THREE.Group();

export function initializeMap() {
    for (let rowIndex = 0; rowIndex > -5; rowIndex--) {
        const grass = Grass(rowIndex);
        map.add(grass);
    }
    addRows();
}

export function addRows() {
    metadata.forEach((rowData, index) => {
        const rowIndex = index + 1;

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