let eggs = [];
let running = true;
function Egg(positions, side){
  // console.log(positions, side);
  this.side = side;
  this.status = 0;
  this.positions = positions;
  this.speed = 1;

  this.move = function(){
  this.status++;

  if(this.status > 4)
    resetgame();

  }
  this.show = function(){
    if(this.status > 0) {
      this.pos = this.positions[this.status-1];
      image(I.egg[this.status-1], this.pos.x, this.pos.y);
      // image(I.egg[this.status-1], 100,100);


    }

  }



}

function eggpos(p){
  const positions = [
      [{x:8, y:26},{x:73, y:61},{x:134, y:63},{x:142, y:80}],
      [{x:5, y:178},{x:45, y:206},{x:135, y:210},{x:155, y:235}],
      [{x:600, y:177},{x:550, y:203},{x:450, y:215},{x:415, y:235}],
      [{x:600, y:26},{x:560, y:60},{x:465, y:75},{x:435, y:100}]
  ];
  return positions[p];
  // for(let i = 0 ; i < positions.length; i++){
  //   for(let o = 0; o < positions[i].length; o++){
  //     console.log(o);
  //     image(I.egg[o],positions[i][o].x,positions[i][o].y)
  //   }
  // }
}


function startEggs(){
  eggGen();
}
function eggGen() {
  let place = floor(random(4));
  eggs.push(new Egg(eggpos(place), stringyPlace(place)))
  console.log(char.s)
  if(char.s != 'menu'){
  setTimeout(eggGen, 3000*upspeed);
  }
}
function updateEggs(){
  for(let i = 0; i < eggs.length; i++){
    // console.log(egg);
    // console.log(eggs[i])
    eggs[i].move();

  }

  moves = 0;
  if(char.s != 'menu'){
  setTimeout(updateEggs, 2000*upspeed);
  }
  redraw();
}
