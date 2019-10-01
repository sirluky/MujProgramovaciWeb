

function setup() {
  
   frameRate(60)
  createCanvas(781,781);
  initboard();
  initPlayers();
  background(200);

  // noLoop();

}

function draw() {
  showplaces();
  showbombs();
  showexplosions();
  showplayers();

}
function keyPressed(){

}
