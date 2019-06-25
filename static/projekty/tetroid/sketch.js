let vpole = 10;
let csize;
let grid = create2Dgrid(10);
let selections = []
let grabbingItem = false;
let animation = 0;




function preload() {
   selections.push(new Selection(60,50,1))
   selections.push(new Selection(201,50,2))
   selections.push(new Selection(340,50,3))
  loadStatus();
}

function setup() {
  createCanvas(402, 502);
  csize = floor(width/vpole)
  document.querySelector("#nova").addEventListener("click", function() {
    console.log('nova hra')
    selections = [];
      selections.push(new Selection(60,50,1))
   selections.push(new Selection(201,50,2))
   selections.push(new Selection(340,50,3))
    grid = create2Dgrid(10)
    skore.textContent = 0;
    
    saveCurrentStatus();
  })
  document.querySelector("#zpet").addEventListener("click", function() {
    console.log('zpet')
    
  })
}

function draw() {
  fill(245,245,245)
  rect(0,401,width,101)
  
  if(mouseIsPressed){
    checkGrab()
  } else {
    if(grabbingItem !== false ){
      placeShape(grabbingItem)
    }
    grabbingItem = false;
  }
   
  for(let y = 0; y < vpole; y++){
    for(let x = 0; x < vpole; x++){
      let item = grid[y][x];
      let clr = setColor(item).levels;
      
      stroke(clr[0]-120,clr[1]-120,clr[2]-120);
      if(clr[0] === 255){
        stroke(0,150);
      }
      if(animation > 0){
        let [r,g,b] = setColor(item).levels;
        fill(r,g,b,30)
      }else
        setColor(item);
      
      rectOn(x,y)
    }
  }
  selections.forEach(sel => sel.display())
  let selCount = 0
  selections.forEach(sel => {if(sel.disabled) {selCount+=1;}});
  
  //(c.disabled ? 1 : 0)
if(selCount > 2){
      selections.forEach(sel => sel.roll())
}
  
  animation--;
}