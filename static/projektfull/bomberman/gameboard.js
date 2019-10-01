let gameboard;
let placeSize = 60;
function initboard() {
    gameboard = new Array(floor(width/placeSize));
    for(let i = 0; i < gameboard.length; i++){
      gameboard[i] = new Array(floor(height/placeSize));
      gameboard[i].fill(0);
    }

    gameboard = getMap();
}

function showplaces(){
  for(let o = 0; o < gameboard.length; o++){
    for(let i = 0; i < gameboard[0].length; i++){
      fill(colorofplace(gameboard[i][o]));
      rect(o*placeSize,i*placeSize,placeSize,placeSize);
    }
  }
}

function colorofplace(p){
  if(p === 1)
    return color(50,50,50);
  else if(p === 2)
    return color(120,255,20);
  else
    return color(200,180,50);
}


