
//#region -- IMPORTS ---

import * as PIXI from "pixi.js";
//import Victor from "victor";
//import Matter from "matter-js";
import gsap from "gsap";

//#region --- INNIT ---
let canvasSizeX = (720);
let canvasSizeY = (720);
const reels = [];

const canvas = document.getElementById("mycanvas");
const app = new PIXI.Application({
    //view: canvas,

    backgroundColor: 0x88cc00,
    transparent: .5,
    width: canvasSizeX,
    height: canvasSizeY
});
globalThis.__PIXI_APP__ = app;

document.body.appendChild(app.view);

//#endregion

const player = {

    score: 0,
    ammo: 10,
    fireRate: .8,
    speed: 2,


    OnSnackEaten: () => {
        this.score++;

    },

    createPlayer: () => {

        const playerContainer = new PIXI.Container();
        const playerSegmet = new PIXI.Graphics();
        playerSegmet.beginFill(0x8080ff);
        playerSegmet.drawRect(0, 0, 40, 40);
        playerContainer.addChild(playerSegmet);

        player.playerContainer = playerContainer;

        app.stage.addChild(playerContainer);
        return player.playerContainer;
    }

}

player.createPlayer();


function testForCollision(obj1, obj2) {
    const bounds1 = obj1.getBounds();
    const bounds2 = obj2.getBounds();

    return bounds1.x < bounds2.x + bounds2.width
        && bounds1.x + bounds1.width > bounds2.x
        && bounds1.y < bounds2.y + bounds2.height
        && bounds1.y + bounds1.height > bounds2.y;
}

function lerp(a1, a2, t) {
    return a1 * (1 - t) + a2 * t;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Set UP key input///////
let xDir = 0;
let yDir = 0;

document.onkeydown = function (e) {
    switch (e.key) {
        case "a":
            xDir = -1;
            yDir = 0;
            break;
        case 'd':
            xDir = 1;
            yDir = 0
            break;
        case 'w':
            yDir = -1;
            xDir = 0;
            break; a
        case 's':
            yDir = 1;
            xDir = 0;
            break;
        default:
            break;
    }
    console.log(xDir + " " + yDir);
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////
// MOVE Player
app.ticker.add((delta) => {
    if (player.playerContainer != null) {
        player.playerContainer.x = player.playerContainer.x + xDir * player.speed * delta;
        player.playerContainer.y = player.playerContainer.y + yDir * player.speed * delta;
    }

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create food

const snack = new PIXI.Graphics();

snack.beginFill(0xff1a75);
snack.drawCircle(0, 0, 10);
snack.endFill();

app.stage.addChild(snack);
console.log(snack);

app.ticker.add((delta) => {
    if (testForCollision(snack, player.playerContainer)) {
        console.log('should eat');

        //Move snack
        moveSnackPosition();

        //+1 to snake
        addToPlayerSize();

    }
});
///////////////////////////////////////////////
///Reposition Snack

const moveSnackPosition = function () {
    snack.x = Math.random() * canvasSizeX;
    snack.y = Math.random() * canvasSizeY;
}

//ADD TO SNAKE SIZZE AND REBUILD

const addToPlayerSize = function () {
    player.size++;
}

