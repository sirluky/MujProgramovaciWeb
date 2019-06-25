let shapes = {
  line4h:[[1],[1],[1],[1]],
  line4v:[[1,1,1,1]],
  line3h:[[1],[1],[1]],
  line2h:[[1],[1]],
  line3v:[[1,1,1]],
  line2v:[[1,1]],
  
  block :[[2]],
  square:[[3,3],
          [3,3]],
  squareBig:[[3,3,3],[3,3,3],[3,3,3]],
  obstacle:[[0,4,0],[4,4,4],[0,4,0]],
  hokejkalb:[[2,0,0],[2,0,0],[2,2,2]],
  hokejkarb:[[0,0,2],[0,0,2],[2,2,2]],
  hokejkalt:[[2,2,2],[2,0,0],[2,0,0]],
  hokejkart:[[2,2,2],[0,0,2],[0,0,2]],
  
  
 
  
}

function getRandomShape() {
  const names =Object.keys(shapes)
  const rand = floor(random(names.length))
  const res = shapes[names[rand]];
  return  res
}

function getScoreVal(shape) {
  let sc = 0;
  for(let y = 0; y < shape.length; y++){
    for(let x = 0; x < shape[0].length; x++){
    if(shape[y][x] > 0){
      sc++;
    }
  }}
  return sc;
}