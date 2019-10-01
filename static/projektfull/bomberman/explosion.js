let explosions = [];

function showexplosions() {

    for(let i = explosions.length-1 ; i >= 0; i--){
      let expl = explosions[i];
        expl.show();

    }
}
function deleteExpl(){
  explosions.splice(0,1);
}


class Explosion{
  constructor(x,y,range){
    this.x = x;
    this.y = y;
    this.range = range;
    this.particles = [];
    this.lifetime = 50;

    let i = this.y;
    let o = this.x;
    //X direction
    for(let o = 1; o < this.range; o++) {

      if((o + this.x > 0 && o + this.x < gameboard.length-1) && gameboard[this.y][o + this.x] === 2){
        gameboard[this.y][o + this.x] = 0;
        let part = {x:this.y, y:o + this.x};
        this.particles.push(part);

        break;
      } else if(gameboard[this.y][o + this.x] === 1){
      break;
    }else{
      let part = {x:this.y, y:o + this.x};
      this.particles.push(part);
    }
    }
    for(let o = -1; o > -this.range; o--) {

      if((o + this.x > 0 && o + this.x < gameboard.length-1) && gameboard[this.y][o + this.x] === 2){
        gameboard[this.y][o + this.x] = 0;
          this.particles.push({x:this.y,y:o + this.x});
        break;
      } else if(gameboard[this.y][o + this.x] === 1){
      break;
    }else
    this.particles.push({x:this.y,y:o + this.x});
    }
    //Y direction
    for(let i = 1; i < this.range; i++) {

      if((i + this.y > 0 && i + this.y < gameboard.length-1) && gameboard[i + this.y][o] === 2){
        gameboard[i + this.y][o] = 0;
  this.particles.push({x:i + this.y,y:o});
        break;
      } else if(gameboard[i + this.y][o] === 1){
      break;
    } else
    this.particles.push({x:i + this.y,y:o});
    }


    for(let i = -1; i > -this.range; i--) {

      if((i + this.y > 0 && i + this.y < gameboard.length-1) && gameboard[i + this.y][o] === 2){
        gameboard[i + this.y][o] = 0;
          this.particles.push({x:i + this.y,y:o});

        break;
      } else if(gameboard[i + this.y][o] === 1){
      break;

    }else
      this.particles.push({x:i + this.y,y:o});
  }
  }

  show(){
    //let pSB = placeSize+10;
    let pSE = placeSize-20;
    fill(222,190,20)
    for(let i = 0; i < this.particles.length; i++){
      let par = this.particles[i];
      rect(par.y*placeSize+10, par.x*placeSize+10, pSE,pSE)
    }
    if(--this.lifetime < 0)
      deleteExpl();
  }
}
