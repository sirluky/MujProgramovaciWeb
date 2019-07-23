var sirkacanvast = 300/20,vyskacanvast = 560/20, mezeramezipolicky = 1, sirkapol = 20, solided = false, prohral = false, bg;
var place = [], movingp = [], movingx = 0, movingy = 0, plnana = 0;
var pomarr = [];
var shapes = [[
    [0,0,0,0],
    [0,4,4,0],
    [0,4,4,0],
    [0,0,0,0]
],[
    [0,0,0,0],
    [3,3,3,0],
    [0,0,3,0],
    [0,0,0,0]
],[
    [0,5,0,0],
    [5,5,0,0],
    [0,5,0,0],
    [0,0,0,0]
],[
    [0,4,0,0],
    [0,4,0,0],
    [0,4,0,0],
    [0,4,0,0]
],[
    [0,2,0,0],
    [0,2,2,0],
    [0,0,2,0],
    [0,0,0,0]
],[
    [0,0,0,0],
    [0,6,6,6],
    [0,6,0,0],
    [0,0,0,0]
],
              
             ];
function preload() {
    bg = loadImage("pozadivis.png");
}
function setup() {
    movingx = round(sirkacanvast/2)-2;
    //var nextitem = createCanvas(81,81);
 var game = createCanvas(sirkacanvast*20+1,vyskacanvast*20-20+1);
    
    frameRate(20);
    vytvorTetrisA(place, sirkacanvast,vyskacanvast, 0);
    vytvorTetrisA(movingp, 4,4);
    rollnew();
    //place[0][0].show();
//    movingp = new tblock(1);
//    movingp.show(1,0);
    
}
function draw() {
    background(bg);
    
    if(frameCount % 4 === 0)
        movingy++;
//    for(let o = 0; o < place.length; o++){
//        for(let i = 0; i < place[o].length; i++){
//            place[o][i].show(o,i);
//        }
//    }
//    for(let o = 0; o < 3; o++){
//            movingp[o] = []; 
//        for(let i = 0; i < 3; i++){
//            movingp[o][i] = new tblock(1);
//        }
//    }
    touching();
    plnana = fullline();
    while(plnana > 0) {
        odbourej(plnana);
        plnana = fullline();
    }
    showthisarray(place);
    showthisarray(movingp, movingx, movingy);
    if (prohral === true)
        prohraljsi();
    
}
function vytvorTetrisA(arrname, sirka, vyska, color = 0) {
    for(let o = 0; o < sirka; o++){
            arrname[o] = []; 
        for(let i = 0; i < vyska; i++){
            arrname[o][i] = new tblock(color);
            
        }
    }
    console.log("vytvarim...");
}
function showthisarray(misto = "asi ses kokot no...", movex = 0, movey = 0) {
    for(let o = 0; o < misto.length; o++){
        for(let i = 0; i < misto[o].length; i++){
            misto[o][i].show(o + movex,i + movey);
        }
    }
}
function tblock(c) {
    this.color = c;
    this.show = function(x, y) {
        stroke(50);
        //noStroke();
        switch (this.color){
            case 1:
                fill(255);
                break;
            case 2:
                fill(255,100,100);
                break;
            case 3: 
                fill(100,255,100);
                break;
            case 4:
                fill(100,100,255);
                break;
            case 5:
                fill(255,255,130);
                break;
            case 6:
                fill(134,201,255);
                break;
                
            default:
                noFill();
                noStroke;
            
        }
        
        //stroke(0);
        //noStroke();
        rect(sirkapol*x,sirkapol*y, sirkapol,sirkapol);
        
    }
    
}
function putinmovingp(thing, nofshape) {
    if(nofshape === undefined) {
        vytvorTetrisA(movingp, 4,4);
        for(let o = 0; o < 4; o++){
        for(let i = 0; i < 4; i++){
            movingp[o][i].color = thing[o][i];
        }
    }
    }else {
        vytvorTetrisA(movingp, 4,4);
        for(let o = 0; o < 4; o++){
        for(let i = 0; i < 4; i++){
            movingp[o][i].color = thing[nofshape][i][o];
        }
    }
 }
}
function keyPressed() {
    if (keyIsDown(LEFT_ARROW)) {
        movingx--;
        moveinzone();
        for(let o = 0; o < 4; o++){
        for(let i = 0; i < 4; i++){
            if(place[o+movingx][i+movingy].color > 0 && movingp[o][i].color > 0)
                movingx++;
        }}
        
        
    }
    if (keyIsDown(RIGHT_ARROW)){
        movingx++;
        moveinzone();
        for(let o = 0; o < 4; o++){
        for(let i = 0; i < 4; i++){
            if(place[o+movingx][i+movingy].color > 0 && movingp[o][i].color > 0)
                movingx--;
        }}
            
    }
        
    if (keyIsDown(UP_ARROW)){
        rotatemovingp();
    moveinzone();
    
    }
    if (keyIsDown(DOWN_ARROW)){
        pushdown();
    }
}
function rotatemovingp(x, y) {
     
    let pom1x, pom1y, pom2x;
    vytvorTetrisA(pomarr, 4, 4);
    for(let o = 0; o < 4; o++){
        for(let i = 0; i < 4; i++){
            let pomcolor = movingp[o][i].color; 
            pom1x = o - 2;
            pom1y = i - 2;
            if(o > 1)
                pom1x++;
            if(i > 1)
                pom1y++;
            pom2 = pom1x;
            pom1x = pom1y;
            pom1y = pom2;
            pom1x *= -1;
            if(pom1x > 0)
                pom1x--;
            if(pom1y > 0)
                pom1y--;
            pom1x += 2;
            pom1y += 2;

            pomarr[pom1x][pom1y] = pomcolor;
            
    }}
    putinmovingp(pomarr);
    //kopie pomarray do origoarr
}
function moveinzone() {
//let dotek = false;
    for(let o = 0; o < 4; o++)
        for(let i = 0; i < 4; i++){
            if(movingp[o][i].color > 0){
                while(movingx+o < 0)
                    movingx++;
                while(movingx+o >= sirkacanvast)
                    movingx--;
            }}
}
function touching() {
    let touch= false;
    for(let o = 0; o < 4; o++) {
        for(let i = 0; i < 4; i++) {
            if(movingy+i+1 >= vyskacanvast-1 && movingp[o][i].color > 0){
                makeitsolid();
                touch = true;
            }else if (movingy >= -1 && movingp[o][i].color > 0 && place[o+movingx][i+movingy+1].color > 0){
                touch = true;
                if(movingy >= 0)
                makeitsolid();
                else
                prohral = true;
        }}
    }
    return touch;
}
function rollnew() {
    let n = floor(random(shapes.length));
    movingx = round(sirkacanvast/2)-2;
    movingy = -4;
    putinmovingp(shapes,n);
}
function makeitsolid() {
    
    for(let o = 0; o < 4; o++) {
        for(let i = 0; i < 4; i++) {
            if(movingp[o][i].color !== 0)
            place[o+movingx][i+movingy].color = movingp[o][i].color;
    }}
    rollnew();
}
function fullline() {
    let vrade = 0;
    rada = 0; 
for(let i = 0; i < vyskacanvast-1; i++){
    vrade = 0;
    
    for(let o = 0; o < sirkacanvast; o++){
            if(place[o][i].color > 0)
            vrade++;
        }
    if(vrade === sirkacanvast)
        rada = i;
    }
    return rada;
}
function odbourej(y) {
    for(let i = y; i > 0; i--) {
            for(let o = 0; o < sirkacanvast; o++) {
            place[o][i].color = place[o][i-1].color;
    }}
}


function prohraljsi() {
    noLoop();
    push()
    fill(200);
    
    textSize(50);
    textAlign(CENTER);
    text("Prohral jsi", width/2, height/2)
    console.log("prohral jsi");
    pop()
}
function pushdown() {
    let pushdownstop = false;
    while (movingy < 0){
                movingy++;
            } 
    while(touching() === false){
         movingy++;
        }
    }
    
