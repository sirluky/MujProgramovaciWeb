function goflCalc(){
  for(let i = 0; i < grid.length; i++) {
    grid[i].n = 0;
  }
  for(let i = 0; i < rows; i++){
    for(let o = 0; o < cols; o++){
      let item = grid[i*cols+o];

      if(item.s === true){
        let dx = o;
        let dy = i;
        aroundme(dx,dy);
      }
    }
  }

  lifechanging();

}
function aroundme(dx,dy){
    for(let i = 0; i < around.length; i++){
      let p = around[i];
      if(grid[(dy+p.y)*cols+dx+p.x] !== undefined){
        let item = grid[(dy+p.y)*cols+dx+p.x];
        item.n++;
        // console.log('trigger');
      }
    }
}

function lifechanging(){
  for(let i = 0; i < rows; i++){
    for(let o = 0; o < cols; o++){
      let item = grid[i*cols+o];

      if(item.n === 0 || item.n === 1)
      item.s = false;
      else if(item.n === 3)
      item.s = true;
      else if(item.n > 3)
      item.s = false;
    }
  }
}
