
//#region -- IMPORTS ---

import * as PIXI from "pixi.js";
//import Victor from "victor";
//import Matter from "matter-js";


// const app = new PIXI.Application({ autoStart: false });
// document.body.appendChild(app.view);
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);


globalThis.__PIXI_APP__ = app;



// Create object to store sprite sheet data
const atlasData = {
    frames: {
        frame1: {
            frame: { x: 0 * 256, y: 1, w: 256, h: 256 },
            sourceSize: { w: 256, h: 128 },
            spriteSourceSize: { x: 0, y: 0, w: 256, h: 256 }
        },
        frame2: {
            frame: { x: 1 * 256, y: 1, w: 256, h: 256 },
            sourceSize: { w: 256, h: 256 },
            spriteSourceSize: { x: 0, y: 0, w: 256, h: 256 }
        },
        frame3: {
            frame: { x: 2 * 256, y: 1, w: 256, h: 256 },
            sourceSize: { w: 256, h: 128 },
            spriteSourceSize: { x: 0, y: 0, w: 256, h: 256 }
        },
        frame4: {
            frame: { x: 3 * 256, y: 1, w: 256, h: 256 },
            sourceSize: { w: 256, h: 256 },
            spriteSourceSize: { x: 0, y: 0, w: 256, h: 256 }
        },
        frame5: {
            frame: { x: 4 * 256, y: 1, w: 256, h: 256 },
            sourceSize: { w: 256, h: 128 },
            spriteSourceSize: { x: 0, y: 0, w: 256, h: 256 }
        },
        frame6: {
            frame: { x: 5 * 256, y: 1, w: 256, h: 256 },
            sourceSize: { w: 256, h: 256 },
            spriteSourceSize: { x: 0, y: 0, w: 256, h: 256 }
        },
        frame7: {
            frame: { x: 6 * 256, y: 1, w: 256, h: 256 },
            sourceSize: { w: 256, h: 128 },
            spriteSourceSize: { x: 0, y: 0, w: 256, h: 256 }
        },
        frame8: {
            frame: { x: 7 * 256, y: 1, w: 256, h: 256 },
            sourceSize: { w: 256, h: 256 },
            spriteSourceSize: { x: 0, y: 0, w: 256, h: 256 }
        },
    },
    meta: {
        image: './Sprites/CharacterDown.png',
        format: 'RGBA8888',
        size: { w: 256, h: 256 },
        scale: 1
    },
    animations: {
        idleDown: ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8'] //array of frames by name
    }
}


// Create the SpriteSheet from data and image
const spritesheet = new PIXI.Spritesheet(
    PIXI.BaseTexture.from(atlasData.meta.image),
    atlasData
);

// Generate all the Textures asynchronously
await spritesheet.parse();

// spritesheet is ready to use!
const anim = new PIXI.AnimatedSprite(spritesheet.animations.idleDown);


// set the animation speed
anim.animationSpeed = 0.1666;
// play the animation on a loop
anim.play();
// add it to the stage to render
app.stage.addChild(anim);



















// PIXI.Assets.load('./Sprites/CharacterDown.png').then((spritesheet) => {
//     // create an array to store the textures
//     const textures = [];
//     let i;

//     for (i = 0; i < 10; i++) {
//         const framekey = `0123456789 ${i}.ase`;
//         const texture = PIXI.Texture.from(framekey);
//         const time = spritesheet.data.frames[framekey].duration;
//         textures.push({ texture, time });
//     }

//     const scaling = 4;

//     // create a slow AnimatedSprite
//     const slow = new PIXI.AnimatedSprite(textures);
//     slow.anchor.set(0.5);
//     slow.scale.set(scaling);
//     slow.animationSpeed = 0.5;
//     slow.x = (app.screen.width - slow.width) / 2;
//     slow.y = app.screen.height / 2;
//     slow.play();
//     app.stage.addChild(slow);

//     // create a fast AnimatedSprite
//     const fast = new PIXI.AnimatedSprite(textures);
//     fast.anchor.set(0.5);
//     fast.scale.set(scaling);
//     fast.x = (app.screen.width + fast.width) / 2;
//     fast.y = app.screen.height / 2;
//     fast.play();
//     app.stage.addChild(fast);

//     // start animating
//     app.start();
// });






// Initialize Pixi application

// import characterDwnSS from './Sprites/characterDown.png';

// const app = new PIXI.Application({
//     width: 800,
//     height: 600,
//     backgroundColor: 0x1099bb,
// });
// document.body.appendChild(app.view);

// //const Player = function (app) {

// const playerContainer = new PIXI.Container();
// const atlasData = {
//     frames: {
//         enemy1: {
//             frame: { x: 0, y: 0, w: 128, h: 128 },
//             sourceSize: { w: 128, h: 128 },
//             spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
//         },
//         enemy2: {
//             frame: { x: 128, y: 128, w: 128, h: 128 },
//             sourceSize: { w: 128, h: 128 },
//             spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
//         },
//     },
//     meta: {
//         image: './Sprites/characterDown.png',
//         format: 'RGBA8888',
//         size: { w: 128, h: 128 },
//         scale: 1
//     },
//     animations: {
//         enemy: ['enemy1', 'enemy2'] //array of frames by name
//     }
// }


// // Create the SpriteSheet from data and image
// const spritesheet = new PIXI.Spritesheet(
//     PIXI.BaseTexture.from(atlasData.meta.image),
//     atlasData
// );

// // Generate all the Textures asynchronously
// await spritesheet.parse();

// // spritesheet is ready to use!
// const anim = new PIXI.AnimatedSprite(spritesheet.animations.enemy);

// // set the animation speed
// anim.animationSpeed = 0.1666;
// // play the animation on a loop
// anim.play();
// // add it to the stage to render
// app.stage.addChild(anim);

// createPlayer();

// app.loader.add("characterDwnSS", characterDwnSS);
// app.loader.load(doneLoading);

// function doneLoading(e) {

//     createPlayerSheets();
//     app.ticker.add();
// }

// function createPlayerSheets() {
//     let ssheets = new PIXI.BaseTexture.from(app.loader.resources['characterDwnSS'].url);
//     let w = 128;
//     let h = 128;
//     let playerSheet = {};

//     playerSheet['IdleDown'] = [
//         new PIXI.Texture(ssheets, new PIXI.Rectangle(0 * w, 0, w, h)),
//         new PIXI.Texture(ssheets, new PIXI.Rectangle(1 * w, 0, w, h)),
//         new PIXI.Texture(ssheets, new PIXI.Rectangle(2 * w, 0, w, h)),
//         new PIXI.Texture(ssheets, new PIXI.Rectangle(3 * w, 0, w, h)),
//         new PIXI.Texture(ssheets, new PIXI.Rectangle(4 * w, 0, w, h)),
//         new PIXI.Texture(ssheets, new PIXI.Rectangle(5 * w, 0, w, h)),
//         new PIXI.Texture(ssheets, new PIXI.Rectangle(6 * w, 0, w, h)),
//         new PIXI.Texture(ssheets, new PIXI.Rectangle(7 * w, 0, w, h))
//     ];


// }

// function createPlayer() {
//     player = new PIXI.AnimatedSprite(createPlayerSheets().playerSheet.IdleDown);

//     player.anchor.set(0.5);
//     player.animationSpeed = 0.5;
//     player.loop = false;
//     player.x = app.view.width / 2;
//     player.y = app.view.height / 2;
//     playerContainer.addChild(player);
//     app.stage.addChild(playerContainer);
//     player.play();
// }

// // // Add player sprite to the container


// // // Set up keyboard input
// const keys = {};
// window.addEventListener('keydown', (e) => {
//     keys[e.key] = true;

//     const speed = 5;


//     app.ticker.add(() => {
//         // Move player based on keyboard input
//         if (keys['w']) { // Move up
//             playerSprite.y -= speed;
//         }
//         if (keys['s']) { // Move down
//             playerSprite.y += speed;
//         }
//         if (keys['a']) { // Move left
//             playerSprite.x -= speed;
//         }
//         if (keys['d']) { // Move right
//             playerSprite.x += speed;
//         }

//         // Ensure player stays within the bounds of the screen
//         const minX = playerSprite.width / 2;
//         const maxX = app.screen.width - playerSprite.width / 2;
//         const minY = playerSprite.height / 2;
//         const maxY = app.screen.height - playerSprite.height / 2;
//         playerSprite.x = Math.min(Math.max(playerSprite.x, minX), maxX);
//         playerSprite.y = Math.min(Math.max(playerSprite.y, minY), maxY);
//     });
// });

// window.addEventListener('keyup', (e) => {
//     keys[e.key] = false;
//};

//const p = new Player(app);



// Define player movement speed


// Create a container for the player character
