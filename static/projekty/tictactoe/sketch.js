var places = [], predmet = 0, vyhra = 0, pozn;
function setup() {
    createCanvas(600,600);
	pozn = createP("Hráč 1 je na řadě (Kolečka)");
    for (let x = 0; x < 3; x++) {
        places[x] = new Array();
        for (let y = 0; y < 3; y++) {
            places[x][y] = new Place(x, y);
        }
    }
}

function draw() {
    for (let x = 0; x < 3; x++) { 
        for (let y = 0; y < 3; y++) {
            places[x][y].show();
        }
    }
    textSize(50);
    textAlign(CENTER);
    if (vyhra === 1) {
        text("Hráč 1 (kolečka) vyhrál",300, 320);
    } else if (vyhra === 2)
        text("Hráč 2 (křížky) vyhrál",300, 320);
}
class Place{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.item = "";
    }
    show() {
        push();
        translate(this.x*width/3,this.y*height/3);
        rect(0,0,width/3-2,height/3-2);
        if (this.item === "circle") {
            noFill();
			stroke(200,0,0);
            
            strokeWeight(20);
            ellipse(width/6-1,width/6-1,120,120);
        } else if (this.item === "cross") {
            strokeWeight(20);
            stroke(0,0,200);
            translate(width/6-1,width/6-1);
            line(-65,-65,65,65);
            line(-65,65,65,-65);
        }
        pop();
    }
}
function mousePressed() {
    if (vyhra === 0) {
    mousex = floor(map(mouseX, 0,width/3*2,0,2));
    mousey = floor(map(mouseY, 0,width/3*2,0,2));
    if (places[mousex][mousey].item === "") {
    if (predmet++ % 2) {
    places[mousex][mousey].item = "cross";
pozn.html("Hráč 1 je na řadě (Kolečka)");

     } else {
    places[mousex][mousey].item = "circle";
 pozn.html("Hráč 2 je na řadě (Křížky)");
     }
}
    
    if (checkwin("circle"))
        vyhra = 1;
    else if (checkwin("cross")) {
        vyhra = 2;
    }
    }
}
function checkwin(forcheck) {
    let x, y;
    let characters = 0;
    let vyhra =false;
    //vertikalne
      for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
           
            if (places[x][y].item === forcheck) {
            characters++;
                 
            }
        }
        if (characters === 3)
        vyhra = true;
          characters = 0;
      }
    
    //horizontalne
    for (y = 0; y < 3; y++) {
        for (x = 0; x < 3; x++) {
           
            if (places[x][y].item === forcheck) {
            characters++;
                 
            }
        }
        if (characters === 3)
        vyhra = true;
          characters = 0;
      }
    //dokrize
        x = 0;
        for (y = 0; y < 3; y++) {
           
            if (places[x][y].item === forcheck) {
            characters++;
                 x++;
            }
        }
        if (characters === 3)
        vyhra = true;
          characters = 0;
    
     x = 2;
        for (y = 0; y < 3; y++) {
           
            if (places[x][y].item === forcheck) {
            characters++;
                 x--;
            }
        }
        if (characters === 3)
        vyhra = true;
          characters = 0;
        
    return vyhra;
}