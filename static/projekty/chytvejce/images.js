let I;
function preload(){
  I = {
    back: loadImage('egghuntback.png'),
    menu: loadImage('charmenu.png'),
    lt: loadImage('char1.png'),
    ld: loadImage('char2.png'),
    rt: loadImage('char3.png'),
    rd: loadImage('char4.png'),
    egg:[loadImage('vejce1.png'),loadImage('vejce2.png'),loadImage('vejce3.png'),loadImage('vejce4.png')]
  }
}
function img(s){

  return I[char.s]
}
