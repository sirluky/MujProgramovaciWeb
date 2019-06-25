
function Grabbing(n) {
  if(grabbingItem === false)
  grabbingItem = n;
}


class Selection{
  constructor(x,y,id){
    this.id = id;
    this.disabled = false;
    this.x = x;
    this.y = 402 + y;
    this.shape = getRandomShape()
  }
  
  display() {
    if(!this.disabled){
    if(this.id === grabbingItem){
    const ssize = 37;
      
      let mx = mouseX -  this.shape[0].length/2*ssize;
      let my = mouseY -  this.shape.length/2*ssize;
      // console.log(x,y)
      for(let y = 0; y < this.shape.length; y++){
      for(let x = 0; x < this.shape[0].length; x++){
        let item = this.shape[y][x];
        let clr = setColor(item).levels;
        stroke(clr[0]-120,clr[1]-120,clr[2]-120);
        if(clr[0]=== 255){
          noFill()
          noStroke()
        }
        
        rect(mx+x*ssize,my+y*ssize,ssize,ssize)
      }
    }
    
    } else {
  const ssize = 20;
      
    for(let y = 0; y < this.shape.length; y++){
      for(let x = 0; x < this.shape[0].length; x++){
        let item = this.shape[y][x];
        let clr = setColor(item).levels;
        stroke(clr[0]-120,clr[1]-120,clr[2]-120);
        if(clr[0]=== 255){
          noFill()
          noStroke()
        }
        
        rect(this.x+ssize*x-this.shape[0].length/2*ssize,this.y +y*ssize -this.shape.length/2*ssize,ssize,ssize)
      
    }
  }}
    }}
  
  Place(x,y) {
    x = round(x - this.shape[0].length/2);
    y = round(y - this.shape.length/2); 
    
    if(!this.disabled && applyShape(this.shape,{x,y})){
      checkGrid()
      skore.textContent = int(skore.textContent) + getScoreVal(this.shape);
      this.disabled = true;
    }
    if(int(rekord.textContent) < int(skore.textContent)){
      rekord.textContent = skore.textContent;
    }
    
    saveCurrentStatus(); 
  }
   roll() {
     this.disabled = false
     this.shape = getRandomShape()
    saveCurrentStatus();
     
   }
}