◾ Dip-Dash: A Three.js Game
Welcome to Dip-Dash, a fun 3D game inspired by Crossy Road, built using Three.js. Navigate a blocky world, dodge traffic, and cross the road to achieve the highest score. Test your reflexes and see how far you can go!

◾ Features
Classic Gameplay: Simple, addictive, and easy-to-learn mechanics.

Dynamic World: A procedurally generated map that grows as you play.

Obstacles: Dodge oncoming cars and trucks to stay alive.

Pause Functionality: Press Escape or click the pause button to take a break.

Responsive Controls: Use keyboard arrows or on-screen buttons to move.

◾ How to Play
The objective is simple: cross as many roads as you can without getting hit.

Keyboard: Use the arrow keys (▲, ▼, ◀, ▶) to move your character.

On-screen Controls: Click the corresponding buttons on the screen to move.

Pause: Press the Escape key or click the pause button to stop the game.

◾ Getting Started
Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repository:

Bash

git clone https://github.com/abhaydesu/dip-dash.git
Navigate to the project directory:

Bash

cd dip-dash
Install the dependencies:

Bash

npm install
Running the Game
To start a local development server and play the game, run the following command:

Bash

npm run dev
The game will be available at http://localhost:5173 (or a similar address) in your browser.

◾ Project Structure
The project is structured to keep components organized and maintainable. Here's a brief overview:

src/: Contains all the game logic and components.

components/: Houses all the building blocks of the game, such as the Camera, Player, Map, Car, and Truck.

utilities/: Contains utility functions for things like calculating positions and generating rows.

main.js: The main entry point of the application, where the game loop is set up and all components are initialized.