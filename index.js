
//#region -- IMPORTS ---

import * as PIXI from "pixi.js";
//import Victor from "victor";
//import Matter from "matter-js";
// Initialize Pixi application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

// Create a container for the player character
const playerContainer = new PIXI.Container();
app.stage.addChild(playerContainer);

// Load player sprite
PIXI.loader.add('player', 'path/to/playerSprite.png').load(() => {
    const playerSprite = new PIXI.Sprite(PIXI.loader.resources['player'].texture);
    // Set initial position of the player
    playerSprite.x = app.screen.width / 2;
    playerSprite.y = app.screen.height / 2;
    // Set anchor point to the center of the sprite
    playerSprite.anchor.set(0.5);
    // Add player sprite to the container
    playerContainer.addChild(playerSprite);

    // Set up keyboard input
    const keys = {};
    window.addEventListener('keydown', (e) => {
        keys[e.key] = true;
    });
    window.addEventListener('keyup', (e) => {
        keys[e.key] = false;
    });

    // Define player movement speed
    const speed = 5;

    // Game loop
    app.ticker.add(() => {
        // Move player based on keyboard input
        if (keys['w']) { // Move up
            playerSprite.y -= speed;
        }
        if (keys['s']) { // Move down
            playerSprite.y += speed;
        }
        if (keys['a']) { // Move left
            playerSprite.x -= speed;
        }
        if (keys['d']) { // Move right
            playerSprite.x += speed;
        }

        // Ensure player stays within the bounds of the screen
        const minX = playerSprite.width / 2;
        const maxX = app.screen.width - playerSprite.width / 2;
        const minY = playerSprite.height / 2;
        const maxY = app.screen.height - playerSprite.height / 2;
        playerSprite.x = Math.min(Math.max(playerSprite.x, minX), maxX);
        playerSprite.y = Math.min(Math.max(playerSprite.y, minY), maxY);
    });
});