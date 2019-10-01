let Bombs = [];
class Bomb {
  constructor(x, y , lifetime = 200, range = 3){
    this.lifetime = lifetime;
    this.x = x;
    this.y = y;
    this.range = range;
    this.stepping = true;
  }
  update() {
    this.lifetime--;
    for(let i = 0; i < players.length; i++){
      if(players[i].x !== this.x && players[i].y !== this.y)
      this.stepping = false
    }
  }
  show() {
    fill(20);
    ellipse(this.x*placeSize + placeSize*0.5, this.y*placeSize + placeSize*0.5,placeSize*0.8,placeSize*0.8);
  }


  Boom() {
    explosions.push(new Explosion(this.x,this.y,this.range))

    //I will add an explosion animation in later..



  }
}

function placeBomb(x,y) {
  Bombs.push(new Bomb(x,y))
}

function showbombs() {
  for(let i = Bombs.length-1; i >= 0; i--) {
    let bomb = Bombs[i];
    bomb.update();
    if(bomb.lifetime < 0){
      bomb.Boom();
      Bombs.splice(i,1);
    }
    bomb.show();
  }
}
function BombIsntHere(x,y) {
  let onBomb = true;
  for(let i = 0; i < Bombs.length; i++){
    if(Bombs[i].stepping && Bombs[i].x === x && Bombs[i].y === y) {
      onBomb = false;
      break;
    }
  }
  return onBomb;
}
