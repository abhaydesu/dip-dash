export const minTileIndex = -10 ;
export const maxTileIndex = 10;
export const tilesPerRow = maxTileIndex - minTileIndex + 1;
export const tileSize = 42;


export let isGameOn = true;
export function gameOn() {
    isGameOn = true;
}
export function gameOff() {
    isGameOn = false;
}