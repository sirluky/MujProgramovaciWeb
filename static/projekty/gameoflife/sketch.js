let grid = [];
let cols, rows;
let colsize = 15;
let running = false;
const around = [{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}]

function setup(){

  createCanvas(floor(windowWidth/colsize)*colsize+1,floor(windowHeight/colsize)*colsize+1);
  gridGenerate();
frameRate(5);
  background(220);
  createButton('Krok').mousePressed(step);
  createButton('Auto').mousePressed(toggleRun);
noLoop();
  kresli();
}

function step(){
  console.log('step');
  // goflCalc();
  goflCalc();
  kresli();
}

function gridGenerate(){
  cols = floor(width/colsize);
  rows = floor(height/colsize);
  for(let o = 0; o < rows; o++){
    for(let i = 0; i < cols; i++){
      grid.push(new Cell());
    }
  }
}
function mousePressed(){
  let arrpos = touched(mouseX,mouseY);
  toggleItem(arrpos);
  kresli();
}
function touched(x,y,colsiz = colsize,columns = cols){
  x = floor(x / colsiz);
  y = floor(y / colsiz);
  return y*columns+x;
}
function toggleItem(p){
  grid[p].s = !grid[p].s;
}
function kresli(){
  background(225);
  for(let o = 0; o < rows; o++){
    for(let i = 0; i < cols; i++){
      let item = grid[o*cols+i];
      stroke(100);
      // console.log(grid[o*cols+i]);
      if(item.s === true)
      fill(0);
      else
      fill(225);

      rect(i*colsize,o*colsize,i*colsize+colsize,o*colsize+colsize);
      // fill(0,255);
      // text(item.n ? item.n : 0,i*colsize+4,o*colsize+13);

    }
  }
}
function Cell(){
  this.s = false;
  this.n = null;
}

function draw(){
  goflCalc();
  kresli()
}

function toggleRun(){
  if(running === true){
    noLoop();

  } else {
    loop();
  }
  running = !running;
}
