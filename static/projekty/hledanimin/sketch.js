var cmine = 50,minesize = 20,places = [], prohrals = false, zbminy = 0, firstclick = true, score, remminy = 0, realzbminy, vyhrals = false;
let winmus, losemus, clickmus, markmus;
var cas;
var cass = 0;
var pocmin, velikostplochy,start;

//var helpingarray = [];
//helpingarray = new Array();
function setup() {
    nactihudbu();
    //pocmin = createInput(50);
    score = select("#topbar");
    score.html("Zbývající počet min: " + "");
    
 
}

function draw() {
    
    for (let o  = 0; o < places.length; o++) {
        for (let i = 0; i < places[0].length; i++) {
            places[o][i].show();
        }
    }
    if(prohrals === true) {
            push();
        textAlign(CENTER);
        textSize(places.length*4);
            fill(120,10,10, 150);
        text("Prohrál jsi", width/2, height/2);
        clearInterval(cas);
        pop();
        noLoop();
        losemus.setVolume(0.5);
        losemus.play();
        }
    else if(vyhrals === true) {
        push();
        textAlign(CENTER);
        textSize(places.length*4);
            fill(120,10,10, 150);
        text("Vyhrál jsi", width/2, height/2);
        pop();
        clearInterval(cas);
        
        
    }
}

function gen() {
    pocmin = document.getElementById("pocetmin").value;
    velikostplochy = document.getElementById("plocha").value;
    cmine = pocmin;
    if (velikostplochy*velikostplochy > pocmin) {
    var playground = createCanvas(velikostplochy*20+10,velikostplochy*20+10);
    playground.attribute('oncontextmenu','return false');
    for (let x = 0; x < floor(width/minesize); x++) {
        places[x] = new Array();
        for (let y = 0; y < floor(height/minesize); y++) {
            places[x][y] = new Place(x,y);
        }
    }
    minegen();
    kolemminy();
    remminy = cmine;
    
    //console.log(places);
	noLoop();
        start = document.getElementById("keschovani");
        start.style.display='none';
    } else
    alert("Nelze vytvořit hraci pole, které bude mít více min než polí!!!");
    
}
class Place{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.n = 0;
        //this.mpotencial = random(1,100000);
        this.mine = false;
        this.hidden = true;
        this.ozn = false;
    }
    createmine() {
        this.mine = true;
    }
    show() {
        if (this.hidden === false) {
            fill(235);
            stroke(180);
        rect(this.x*minesize,this.y*minesize,minesize,minesize);
             if (this.mine === true) {
            fill(50);
             stroke(0);
            ellipse(this.x*minesize+minesize/2,this.y*minesize+minesize/2,minesize*0.7,minesize*0.7);
             }
        if (this.mine === false && this.n != 0 ) {
        push()
            noStroke();
        textAlign(CENTER)
            fill(0);
        text(this.n,minesize/2 + this.x*minesize,minesize*0.8+ this.y*minesize);
        
        }
        }
        else {
            push()
            stroke(180);
            fill(255);
            rect(this.x*minesize,this.y*minesize,minesize,minesize);
            
             if(this.ozn === true) {
                
                 stroke(0);
                 strokeWeight(1.5);
                 line(this.x*minesize + minesize/4,this.y*minesize + minesize/3, this.x*minesize + minesize/4, this.y*minesize + minesize*0.9);
                 noStroke();
            fill(255,50,50);
            rectMode(CENTER);
            rect(this.x*minesize + minesize/2,this.y*minesize + minesize/3,minesize/1.5,minesize/2.5);
                 
                 pop()
            }
        }
        pop()
        
    }
    zvetsi() {
        this.n += 1; 
    }
}

//function minegen() {
//    let pot = [], i = 0;
//    for (let h = 0; h < cmine; h++) {
//        let x = round(random(floor(width/minesize-1)));
//        let y = round(random(floor(height/minesize-1)));
//        places[x][y].createmine();
//    }
    
function minegen() {
    let pot = [], i = 0;
    zbminy = 0;
    while (zbminy < cmine) {
        zbminy = 0;
        let x = round(random(floor(width/minesize-1)));
        let y = round(random(floor(height/minesize-1)));
        places[x][y].createmine();
           for (let o  = 0; o < places.length; o++) {
        for (let i = 0; i < places[0].length; i++) {
            if (places[o][i].mine === true)
            zbminy++;
        }}
    }
//    for (let h = 0; h < cmine; h++) {
//        let x = round(random(floor(width/minesize-1)));
//        let y = round(random(floor(height/minesize-1)));
//        places[x][y].createmine();
//    }
    
}
function kolemminy() {
    for (let o  = 0; o < places.length; o++) {
        for (let i = 0; i < places[0].length; i++) { 
        places[o][i].n = 0;
    }}
    for (let o  = 0; o < places.length; o++) {
        for (let i = 0; i < places[0].length; i++) {
            if (places[o][i].mine === true) {
                
                if(o+1 < places.length && i < places[0].length && i >= 0 && o+1 >= 0) {
                    places[o+1][i].zvetsi();
                }
                
               if(o+1< places.length && i-1 < places[0].length  && i-1 >= 0 && o+1 >= 0) {
                    places[o+1][i-1].zvetsi();
		          }
                if(o+1< places.length && i+1 < places[0].length && i+1 >= 0 && o+1 >= 0)
                    places[o+1][i+1].zvetsi();
                
                 if(o < places.length && i-1 < places[0].length && i-1 >= 0 && o >= 0)
                    places[o][i-1].zvetsi();
                
                 if(o < places.length && i+1 < places[0].length && i+1 >= 0 && o >= 0)
                    places[o][i+1].zvetsi();
                
                 if(o-1< places.length && i-1 < places[0].length && i-1 >= 0 && o-1 >= 0)
                    places[o-1][i-1].zvetsi();
                
                 if(o-1< places.length && i < places[0].length && i >= 0 && o-1 >= 0)
                    places[o-1][i].zvetsi();
                
                 if(o-1< places.length && i+1 < places[0].length && i+1 >= 0 && o-1 >= 0)
                    places[o-1][i+1].zvetsi();
                
            }
        }
    }
}
function mousePressed() {
    
    mousex = floor(map(mouseX, 0,minesize, 0,1));
     mousey = floor(map(mouseY, 0,minesize, 0,1));
    if (mouseButton === LEFT && places[mousex][mousey].ozn === false) {
    //console.log("X: " + mousex + "Y: "+ mousey);
    odkryvani(mousex,mousey);
         score.html("Zbývající počet min: " + remminy);
    }
    else if(mouseButton === CENTER || mouseButton === RIGHT) {
        oznac(mousex,mousey);
    }
    zbyvajiciminy();
	redraw();
}

function keyPressed(){
    if(keyCode == 69) {
    mousex = floor(map(mouseX, 0,minesize, 0,1));
     mousey = floor(map(mouseY, 0,minesize, 0,1));
    oznac(mousex,mousey);
	redraw();
if(keyCode == 72) {
        pravdepodobnost();
    }
    }
} 

function odkryvani(x,y) {
    //console.log(places[x][y]);
    places[x][y].hidden = false;
    while (firstclick === true && places[x][y].mine === true){
        
        places[x][y].mine = false;
        minegen();
        kolemminy();
        
    } 
    if(firstclick === true)
    cas = setInterval(pricticas, 1000);
firstclick =false;
    if(places[x][y].mine === true)
        prohral();
    else {
    //places[x][y].
        clickmus.setVolume(0.05);;
        clickmus.play();
        if(places[x][y].n === 0)
        proodkryti(x,y);
    }
}
function proodkryti(dO,dI) {
                let o = dO + 1;
                let i = dI;
                if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true && places[o][i].mine === false) {
                    places[o][i].hidden = false;
                    places[o][i].ozn = false;
                    if(places[o][i].n === 0)
                    proodkryti(o,i);
                }
                 o = dO + 1;
                i = dI -1;
                if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true && places[o][i].mine === false) {
                    places[o][i].hidden = false;
                    places[o][i].ozn = false;
                    if(places[o][i].n === 0)
                    proodkryti(o,i);
                }
                o = dO + 1;
                i = dI + 1;
                if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true && places[o][i].mine === false) {
                    places[o][i].hidden = false;
                    places[o][i].ozn = false;
                    if(places[o][i].n === 0)
                    proodkryti(o,i);
                }
                o = dO;
                i = dI - 1;
                 if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true && places[o][i].mine === false) {
                    places[o][i].hidden = false;
                     places[o][i].ozn = false;
                    if(places[o][i].n === 0)
                    proodkryti(o,i);
                }
    
                o = dO;
                i = dI + 1;
                 if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true && places[o][i].mine === false) {
                    places[o][i].hidden = false;
                     places[o][i].ozn = false;
                    if(places[o][i].n === 0)
                    proodkryti(o,i);
                }
                o = dO - 1;
                i = dI - 1;
                 if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true && places[o][i].mine === false) {
                    places[o][i].hidden = false;
                     places[o][i].ozn = false;
                    if(places[o][i].n === 0)
                    proodkryti(o,i);
                }
                o = dO - 1;
                i = dI;
                 if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true && places[o][i].mine === false) {
                    places[o][i].hidden = false;
                     places[o][i].ozn = false;
                    if(places[o][i].n === 0)
                    proodkryti(o,i);
                }
                o = dO - 1;
                i = dI + 1;
                 if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true && places[o][i].mine === false) {
                    places[o][i].hidden = false;
                     places[o][i].ozn = false;
                    if(places[o][i].n === 0)
                    proodkryti(o,i);
                }
}
//function odkryj(x, y) {
//    if
//}
function prohral() {
    for (let o  = 0; o < places.length; o++) {
        for (let i = 0; i < places[0].length; i++) {
            places[o][i].hidden = false; 
        }}
    prohrals = true;
    
    
}
function oznac(x,y) {
    if(places[x][y].ozn === false) {
    places[x][y].ozn = true; 
            
    }
    else {
    places[x][y].ozn = false; 
    }
    markmus.setVolume(0.05);;
        markmus.play();
    //zbyvajiciminy();
}
function zbyvajiciminy(){
    remminy = cmine;
    realzbminy = cmine;
    for (let o  = 0; o < places.length; o++) {
        for (let i = 0; i < places[0].length; i++) {
            if (places[o][i].ozn === true && places[o][i].hidden === true)
            remminy--;
            if (places[o][i].ozn === true && places[o][i].mine === true)
            realzbminy--;
        }
    }
    if(remminy === 0 && realzbminy === 0) {
        vyhrals = true;
        for (let o  = 0; o < places.length; o++) {
        for (let i = 0; i < places[0].length; i++) {
            if(places[o][i].ozn === false)
            places[o][i].hidden = false;
            
            
        }}
        winmus.setVolume(0.5);;
        winmus.play();
    }
    score.html("Zbývající počet min: " + remminy + ", hrajete jiz "+ cass +" sekund"); // + " realne: " + realzbminy);
}
function pricticas() {
    cass++;
    score.html("Zbývající počet min: " + remminy + ", hrajete jiz "+ cass +" sekund");
}
function nactihudbu() {
    winmus = loadSound("./win.mp3");
    losemus = loadSound("./pacman-die.mp3");
    markmus = loadSound("./hitmarker-sound-effect.mp3");
    clickmus = markmus;
    
//    setTimeout(function() {winmus.setVolume(0.5);;
//        winmus.play();}, 500)
}