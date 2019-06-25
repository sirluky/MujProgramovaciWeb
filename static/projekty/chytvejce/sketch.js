let char = {
  s: 'menu'
}
let score = 0;
let upspeed = 1;
let moves = 0;

function setup(){
  createCanvas(640,480);

  noLoop();
}
function draw(){
    //console.log('redraw');
      image(I.back,0,0);
      image(img(char.s),153,0);

      if(char.s != 'menu')
      for(let i = 0; i < eggs.length; i++){
        // console.log(egg);
        if(eggs[i].status == 4 && eggs[i].side == char.s){
        eggs.splice(i,1);
        score++;
        upspeed = 10 / (10 + score) ;
        }
      }
    for(let i = 0; i < eggs.length; i++){
      // console.log(egg);
      eggs[i].show();
    }

    fill(255,0,0);
    textSize(30);
    text(score,5,height-5);
  // eggpos()
  fill(200,0,100);

  if(!running){
  text('Spadlo ti vejce', 100,200);
  text('Prohral jsi', 150,250);
  }
}

function startgame(){
  score = 0;
  startEggs();
  updateEggs();
}


function stringyPlace(a){
  if(a == 0)
  return 'lt';
  else if(a == 1)
  return 'ld';
  else if(a == 2)
  return 'rd';
  else
  return 'rt';
}
function resetgame(){
  console.log('reseted');
  upspeed = 1;
  char.s = 'menu';
  running = false;
  textSize(40);
  fill(255,0,0);

  setTimeout(_ => running = true, 2000)
  eggs.splice(0,eggs.length);
}
