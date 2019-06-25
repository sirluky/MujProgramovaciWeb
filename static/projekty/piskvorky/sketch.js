var places = [], predmet = 0, vyhra = 0, pozn, radky = 20, sloup = 20;
function setup() {
    createCanvas(960,960);
	console.log("ahoj");
	pozn = createP("Hráč 1 je na řadě (Kolečka)");
    for (let x = 0; x < sloup; x++) {
        places[x] = new Array();
        for (let y = 0; y < radky; y++) {
            places[x][y] = new Place(x, y);
        }
    }
}

function draw() {
background(225, 248, 217);
    for (let x = 0; x < radky; x++) { 
        for (let y = 0; y < sloup; y++) {
            places[x][y].show();
        }
    }
    textSize(height/100*9);
    textAlign(CENTER);
    if (vyhra === 1) {
        text("Hráč 1 (kolečka) vyhrál",width/2, height/100*54);
    } else if (vyhra === 2)
        text("Hráč 2 (křížky) vyhrál",width/2, height/100*54);
	noLoop();
}
class Place{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.item = "";
		this.last = false;
    }
    show() {
        push();
        translate(this.x*width/sloup,this.y*height/radky);
		if (this.last === true) {
			//stroke(50);
noStroke();
			//strokeWeight(2);
			fill(255,241,177);
		} else {
		noStroke();
		}
        rect(0,0,width/sloup-2,height/radky-2);
		
        if (this.item === "circle") {
            noFill();
            stroke(200,0,0);
            strokeWeight(width/sloup/10);
            ellipse(width/sloup/2-1,height/radky/2-1,width/sloup/10*6,height/sloup/10*6);
        } else if (this.item === "cross") {
            strokeWeight(width/sloup/10);
            stroke(0,0,200);
            translate(width/sloup/2-1,height/radky/2-1);
            line(-width/sloup/3,-height/radky/3,width/sloup/3,height/radky/3);
            line(-width/sloup/3,height/radky/3,width/sloup/3,-height/radky/3);
        }
        pop();
    }
}
function mousePressed() {
    if (vyhra === 0) {
    mousex = floor(map(mouseX, 0,width,0,radky));
    mousey = floor(map(mouseY, 0,width,0,sloup));
    if (places[mousex][mousey].item === "") {
//last
for (let x = 0; x < sloup; x++) {
        for (let y = 0; y < radky; y++) {
            places[x][y].last = false;
        }
    }

    if (predmet++ % 2) {
places[mousex][mousey].last = true;
    places[mousex][mousey].item = "cross";
pozn.html("Hráč 1 je na řadě (Kolečka)");
        if (spustkontrolu("cross")) 
        vyhra = 2;
     } else {
places[mousex][mousey].last = true;
    places[mousex][mousey].item = "circle";
 pozn.html("Hráč 2 je na řadě (Křížky)");
         if (spustkontrolu("circle"))
        vyhra = 1;
     }
	redraw();
}
    
}
function spustkontrolu(prokontrolu) {
    for (let i = 0; i < places.length-4; i++) {
        for (let o = 0; o < places[i].length-5; o++) {
    if (checkwin(prokontrolu, o, i)) {
        return true;
        break;
    }
        }
    
    
    }
}}

function checkwin(forcheck, gx, gy) {
    let x, y;
    let characters = 0;
    let vyhra = false;
    //vertikalne
      for (x = gx; x < gx+5; x++) {
        for (y = gy; y < gy+5; y++) {
//           console.log(gy);
//            console.log(y);
            if (places[x][y].item === forcheck) {
            characters++;
                 
            }
        }
        if (characters === 5)
        vyhra = true;
          characters = 0;
      }
    
    //horizontalne
    for (y = gy; y < gy+5; y++) {
        for (x = gx; x < gx+5; x++) {
           
            if (places[x][y].item === forcheck) {
            characters++;
                 
            }
        }
        if (characters === 5)
        vyhra = true;
          characters = 0;
      }
    //dokrize
        x = gx;
        for (y = gy; y < gy+5; y++) {
           
            if (places[x][y].item === forcheck) {
            characters++;
                 x++;
            }
        }
        if (characters === 5)
        vyhra = true;
          characters = 0;
    
     x = gx+5;
        for (y = gy; y < gy+5; y++) {
           
            if (places[x][y].item === forcheck) {
            characters++;
                 x--;
            }
        }
        if (characters === 5)
        vyhra = true;
          characters = 0;
    return vyhra;
}