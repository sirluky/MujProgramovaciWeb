
let gameboard = [];
let placeSize = 60;
function setup() {
  frameRate(20)
  createCanvas(781,781);
  gameboard = new Array(floor(width/placeSize));
  for(let i = 0; i < gameboard.length; i++){
    gameboard[i] = new Array(floor(height/placeSize));
    gameboard[i].fill(0);
  }

  gameboard = getMap();
  createButton("save").mousePressed(function(){saveJSON(gameboard, 'mymap.json');})

}

function draw() {
  for(let o = 0; o < gameboard.length; o++){
    for(let i = 0; i < gameboard[0].length; i++){
      fill(colorofplace(gameboard[i][o]));
      rect(o*placeSize,i*placeSize,placeSize,placeSize);
    }
  }

}
function keyPressed(){

}
function getMap() {
  //Editing map here is so boring i will make an editor and map generator on later stream.
  let mymap =
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]
  return mymap.slice();
}





function colorofplace(p){
  if(p === 1)
    return color(50,50,50);
  else if(p === 2)
    return color(120,255,20);
  else
    return color(200,180,50);
}
function mousePressed(){
  let x = floor(mouseX/placeSize);
  let y = floor(mouseY/placeSize);
  gameboard[y][x] += 1;
  if(gameboard[y][x] > 2)
  gameboard[y][x] = 0;
}
