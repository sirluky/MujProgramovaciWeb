var snake = {
   x: 0,
   y: 0,
   speed:10,
   smer:0,
   delka:1,
};
var ocasx = [];
var ocasy = [];
var jidlox;
var jidloy;
var barva1;
var barva2;
   
function setup() {
   jidlox = floor(random(0 ,39))*10;
   jidloy = floor(random(0 ,39))*10;
   frameRate(10);
  createCanvas(400,400);
  barva1 = color(0,255,0);
  barva2 = color(50,200,0);
  
}

function draw() {
  background(0);
  
  teleport();
  pohyb();
  jidlo();
  snedl();
  umrel();
  ocas();
  nakresli(snake.x,snake.y, barva1);
  //zobskore();
	napisscore();
  
  
  
}
function keyPressed() {
   if (keyCode === DOWN_ARROW && snake.smer != "up")
   snake.smer = "down";
   if (keyCode === UP_ARROW && snake.smer != "down")
   snake.smer = "up";
   if (keyCode === LEFT_ARROW && snake.smer != "right")
   snake.smer = "left";
   if (keyCode === RIGHT_ARROW && snake.smer != "left")
   snake.smer = "right";
}
function pohyb() {
   if (snake.smer == "down" )
   snake.y += 1*snake.speed;

if (snake.smer == "up")
   snake.y -= 1*snake.speed;

if (snake.smer == "right")
   snake.x += 1*snake.speed;

if (snake.smer == "left")
   snake.x -= 1*snake.speed;
}

function teleport() {
   if (snake.smer == "up" && snake.y <= 0)
   snake.y = 400;

   if (snake.smer == "down" && snake.y >= 390)
   snake.y = -10;
   
   if (snake.smer == "left" && snake.x <= 0)
   snake.x = 400;
   
   if (snake.smer == "right" && snake.x >= 390)
   snake.x = -10;
}

function ocas() {
   ocasx.push(snake.x);
   ocasy.push(snake.y);
   while (ocasx.length > snake.delka) {
   ocasx.splice(0,1);
   ocasy.splice(0,1);
   }
  //print(ocasy[x]);
   for (var i = 0; ocasx.length > i; i++) {
      nakresli(ocasx[i], ocasy[i],barva2);
   }
}

function nakresli(x, y, barva) {
   fill(barva);
  noStroke();
  rect(x, y, 10, 10);
}
/*function mousePressed() {
   snake.delka++;
}*/
function jidlo() {
   
   fill(200,0,0);
  noStroke();
  rect(jidlox, jidloy, 10, 10);
  
}
function snedl() {
   if(snake.x == jidlox && snake.y == jidloy) {
       jidlox = floor(random(0 ,39))*10;
       jidloy = floor(random(0 ,39))*10;
      snake.delka++;
      jidlo();
   }
}

function umrel() {

   for (i = 0; i <= ocasx.length; i++) {
      if (snake.smer != "") {
   if(snake.x == ocasx[i] && snake.y == ocasy[i]) {
	if (snake.delka-1 > document.getElementById("rekord").innerHTML)
	select('#rekord').html(snake.delka-1);
   snake.delka = 1;
   background(100,0,0);
   }}
}
}
function zobskore() {
   fill(250,200,0);
   noStroke();
  if (snake.delka > 10)
    text(snake.delka-1,jidlox-2,jidloy+9);
    else
text(snake.delka-1,jidlox+1,jidloy+9);
}
function napisscore() {

	select('#score').html(snake.delka-1);	


}
