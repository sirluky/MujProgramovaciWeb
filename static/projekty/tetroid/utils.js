function create2Dgrid(vpole,vypln = 0) {
  let grid = new Array(vpole)
  for(let y = 0; y < vpole; y++){
    grid[y] = new Array(vpole);
    for(let x = 0; x < vpole; x++){
    grid[y][x] = vypln;
  }}
  return grid;
}

function applyOnGrid(grid,shape,pos,size) {
  let allowed = true;
  for(let y = 0; y < shape.length; y++){
    if(allowed)
    {
    
    for(let x = 0; x < shape[0].length; x++){
      let v = shape[y][x];
      if(v > 0 ){
        if((pos.x +x) >= size || (pos.y +y) >= size || (pos.x +x) < 0 ||(pos.y + y) < 0){
          allowed=false;
          
        } else {
          if(grid[pos.y + y][pos.x+x] !== 0){
            allowed = false
          }
          grid[pos.y + y][pos.x+x] = v;
          
        }
      }
    }
    } else {
      break;
    }
  }
  if(!allowed){
  return false
  }
  
  return grid;
}

function setColor(colorN){
  let clr = color(255)
      switch (colorN){
        case 1: clr = color(80,200,200);break;
        case 2:clr = color(100,255,100);break;
        case 3:clr = color(254,100,100);break;
        case 4:clr = color(254,255,100);break;
        
        default:fill(255)
      }
  fill(clr);
  return clr
}

function rectOn(x,y,yoff=0,xoff=0){
  rect(x*csize+1+xoff,y*csize+1+yoff,csize,csize);
}

function applyShape(shape,pos){
  let cpgrid = [] 
  for (var i = 0; i < grid.length; i++)
    cpgrid[i] = grid[i].slice();
  
   pgrid = applyOnGrid(cpgrid,shape,pos,vpole);
  if(pgrid === false){
    return false;
  } else {
    grid = pgrid;
    return true;
  }
}

