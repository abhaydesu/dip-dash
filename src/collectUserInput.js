import { queueMove } from "./components/Player";

document.getElementById('forward')?.addEventListener("click", () => queueMove("forward"));

document.getElementById('backward')?.addEventListener("click", () => queueMove("backward"));

document.getElementById('left')?.addEventListener("click", () => queueMove("left"));

document.getElementById('right')?.addEventListener("click", () => queueMove("right"));

window.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp" || event.key =="W" || event.key =="w") {
        event.preventDefault();
        queueMove("forward");
    } else if (event.key == "ArrowDown" || event.key =="S" || event.key =="s") {
        event.preventDefault();
        queueMove("backward");
    } else if (event.key == "ArrowLeft" || event.key =="A" || event.key =="a") {
        event.preventDefault();
        queueMove("left");
    } else if (event.key == "ArrowRight" || event.key =="D" || event.key =="d") {
        event.preventDefault();
        queueMove("right");
    }
});