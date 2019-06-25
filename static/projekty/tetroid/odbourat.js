function checkGrid() {
  let count = 0;
  for(let i = 0; i < vpole; i++){
    if(grid[i][i] > 0){
       zkontrolujKriz(i,i);
    } 
  }
}

function zkontrolujKriz(x,y) {
  let rcount = 0;
  for(let i = 0; i < vpole; i++){
    if(grid[i][x] > 0){
       rcount++;
    } 
  }
 
  let ccount = 0;
   for(let i = 0; i < vpole; i++){
    if(grid[y][i] > 0){
       ccount++;
    } 
  }
   if(rcount === 10){
    odbourejSloupec(x);
  }
  if(ccount === 10){
    odbourejRadu(x);
  }
}

function odbourejRadu(y){
  console.log("bouram radu")
for(let i = 0; i < vpole; i++){
    grid[y][i] = 0;
  }
  animation = 40;
  
}

function odbourejSloupec(x) {
  console.log("bouram sloupec")
  for(let i = 0; i < vpole; i++){
    grid[i][x] = 0;
  }
  animation = 40;
}