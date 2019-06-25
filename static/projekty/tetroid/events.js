function checkGrab() {
  let x = mouseX;
  let y = mouseY;
  
  if(y > 402){
    if(x > width/3){
      if(x > width/3*2){
        Grabbing(3);
      } else {
      Grabbing(2);
      
      }
    }else {
        Grabbing(1);
    }
  }
}


function placeShape(selIndex) {
  x = mouseX/csize;
  y = mouseY/csize;
  
  
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < width){
    selections[selIndex-1].Place(x,y) 
  }
}
