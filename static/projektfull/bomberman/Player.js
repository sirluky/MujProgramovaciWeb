let players = [];

function initPlayers() {
  let plr1 = {
    x: 1,
    y: 2,
    movement: [38, 39, 40, 37, 32],
    colour: "darkblue"
  }
  let plr2 = {
    x: 11,
    y: 11,
    movement: [87, 68, 83, 65, 13],
    colour: color(255, 20, 20)
  }

  players.push(new Player(plr1.x, plr1.y, plr1.movement,plr1.colour));
  players.push(new Player(plr2.x, plr2.y, plr2.movement, plr2.colour));
}

class Player {
  constructor(x, y, movement, colour = color(50, 50, 255)) {
    this.sx = x;
    this.sy = y;
    this.x = x;
    this.y = y;
    this.color = colour;
    this.mov = movement;
    this.speed = 0.03;
    this.lastdirection = 1234;
  }
  show() {
    fill(this.color);
    ellipse(this.sx * placeSize + placeSize * 0.5, this.sy * placeSize + placeSize * 0.5, placeSize * 0.7, placeSize * 0.7)

  }
  move() {

    if (keyIsDown(this.mov[0])) {
      if(this.sy + 0.1 >= this.y){
        this.sy -= this.speed;
      } else if (moveAllowed(this.x, this.y - 1, -1)) {
        this.sy -= this.speed;

      }
    } else if (keyIsDown(this.mov[2])) {
       if (this.sy - 0.1 <= this.y) {
         this.sy += this.speed;
       } else if (moveAllowed(this.x, this.y + 1,+ 1)){
         this.sy += this.speed;
           
           }
    } else if (keyIsDown(this.mov[1])) {
      if (this.sx - 0.1 <= this.x) {
        this.sx += this.speed;
      } else if (moveAllowed(this.x + 1, this.y,1)){
        this.sx += this.speed;
          
      }
    } else if (keyIsDown(this.mov[3])) {
        if (this.sx + 0.1 >= this.x) {
          this.sx -= this.speed;
        } else if (moveAllowed(this.x - 1, this.y,3)){
          this.sx -= this.speed;
        }
    }
    this.x = round(this.sx);
    this.y = round(this.sy);

    if (keyIsDown(this.mov[4])) {
      if (placeAllowed(this.x, this.y))
        placeBomb(this.x, this.y, 200);
    }

  }
}

function showplayers() {



  for (let i = 0; i < players.length; i++) {
    let plr = players[i];
    plr.move();
    plr.show();
    let live = true;
    for (let o = 0; o < explosions.length; o++) {
      let par = explosions[o].particles;

      for (let p = 0; p < explosions[o].particles.length; p++) {
        if (plr.y === par[p].x && plr.x === par[p].y) {
          players.splice(i, 1);
          break;
        }
      }
    }

  }


}

function PlayerIsntHere(x, y) {
  let notHere = 0;
  for (let i = 0; i < players.length; i++) {
    let plr = players[i]
    if (plr.x === x && plr.y === y)
      notHere += 1;
  }
  if (notHere < 2)
    return true;
}

//I have to create placeAllowed function
function moveAllowed(x, y, di) {

  if (gameboard[y][x] === 0 && BombIsntHere(x, y) && PlayerIsntHere(x, y))
    return true;
}

function placeAllowed(x, y) {
  let nobomb = true
  for (let i = 0; i < Bombs.length; i++) {
    if (Bombs[i].x === x && Bombs[i].y === y)
      nobomb = false;

  }
  if (nobomb && gameboard[y][x] === 0 && BombIsntHere(x, y))
    return true;
}

function checkifcan(){

}