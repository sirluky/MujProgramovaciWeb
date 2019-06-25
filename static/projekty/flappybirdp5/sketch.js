var nomoreclick = 0;
var checkumrel = 0;
var zemrel = 0;
var skore = 0;
var dskore = 0;
var rekord = 0;
var dtx = 460;
//t = trubky
var t = {
  vp:[],
  vm:170,
  vrch:0,
  x:[],
  xcheck:[],
  spawn:250,
  
  speed:3,

}
//p = ptak
var p = {
	x:100,
  y:240,
  g:0,
  size:30,
  stoup:0,
}


function setup() {
  frameRate(60);
  createCanvas(480, 480);
  gentrubku();
  
}

function draw() {
  background(200,200,255);
  //console.log("umrel si");
  if (zemrel == 0) {
  gravitace();
  
  trubkapohyb();
  
  score();
  
  umrel();
  
  nakresliptaka();
  }
  else if (zemrel == 1) {
  umrti();
  }
  
  
  
	
}
function nakresliptaka() {
  p.stoup--;
  if(p.g > 20) {
  p.g = 20;
  }
  else if (p.g < -20){
   p.g = -15;
  }
  p.y = p.y + p.g;
  if (p.y < 0)
    p.y = 0;
  if (p.y > height)
    p.y = height;
  fill(12,34,233);
push();
	stroke(0,24,162);
pop();
	ellipse(p.x, p.y, p.size, p.size);
	
fill(243,230,65);
ellipse(p.x + 8, p.y - 5, 5, 5);
fill(255,60,60);
push();
stroke(255,60,60)
rect(p.x + 3,p.y + 3, 10, 1 );
pop();
  //pozdeji smazat
  
}
function gravitace() {
  	if (p.stoup > 0) {
  		if (p.g >= 0)
      p.g = -1;
      p.g = p.g * 1.3;
      
		} else {
      
    if (p.stoup < -3) {
    	if (p.g <= 0) 
      p.g = 1;
      p.g = p.g * 1.3;
      
    	}else
         p.g = 0;
    } 
   
}
function mousePressed() {
  if (nomoreclick === 0) {
	p.stoup = 12;
  if (zemrel == 1 || zemrel == 2) {
    zemrel = 0;
  gentrubku();
  
  }}}
function keyPressed() {
  if (nomoreclick === 0) {
	p.stoup = 12;
  if (zemrel == 1 || zemrel == 2) {
    zemrel = 0;
  gentrubku();
  
  }}}
function trubkapohyb() {
  for (var i = checkumrel; t.x.length > i; i++) {
   
      
    t.x[i] -= t.speed;
    if (t.xcheck[i] != 1) {
  	if (t.x[i] <= t.spawn){
      t.xcheck[i] = 1;
      gentrubku();
     
    }}
     if (t.x[i] < -21)  {
       delete t.x[i];
       delete t.vp[i];
		checkumrel++; 
     }
    
  	/*if(t.xcheck[i] != t.xcheck[i+1])
      t.xcheck[i] = 0;
    t.x.splice(0,1);
    t.vp.splice(0,1);
      //i--;
    }*/
    
    kreslitrubku(t.x[i],t.vp[i],t.vm);
    
  }
  
}
function gentrubku() {
  loop();
  
  t.x.push(dtx);
	t.vp.push(random(10,320));
  
}
function kreslitrubku(x,vp,vm, vrch = 0,zespod = 0) {
  zespod = height - vp;
  vrch = zespod - vm;
  push()
  fill(180,255,0);
  //noStroke();
  stroke(140,200,0)
  
  for (var i = checkumrel; t.x.length > i; i++) {
  rect(t.x[i] - 2, height - t.vp[i], 24,- 5);
    rect(t.x[i] - 2, height - t.vp[i] - t.vm, 24,5);
    
  }
  //spodni trubka
  rect(x, zespod, 20,600);
  //horni trubka
  rect(x, 0, 20, vrch);
  //horni a dolni vystupek trubky
  
  pop()
}
function umrel(distan = 0, pom = 0) {
  
  for (var i = checkumrel; t.x.length > i; i++) {
	/*distan = dist(p.x,p.y,t.x[i], 0);
    pom = 480 - t.vp[i] - t.vm;
    console.log(distan);
  if (distan < pom) {
    console.log("umrel si");
  }
    if (p.x > t.x[i] && p.x < t.x[i] + 20 && p.y < height - t.vp[i] - t.vm) {
    //console.log("you died");
        }*/
    //if ()
    
    if (p.y < height - t.vp[i] - t.vm && t.x[i] <  p.x && t.x[i]+20 > p.x)
    zemrel = 1;
  	else if( p.y > height - t.vp[i] && t.x[i] <  p.x && t.x[i]+20 > p.x) 
    zemrel = 1;
    
      
  }
}
function score() {
  for (var i = checkumrel; t.x.length > i; i++) {
	if (p.x >= t.x[i] && p.x < (t.x[i] + t.speed)) {
    skore++;
    if (skore % 25 == 0 && skore != 0 && t.speed < 5)
    t.speed += 1;
    else if (skore % 25 == 0 && skore != 0 && t.speed == 5) {
    t.vm -= 1;
    //p.size -= 1; 
    }
  	}
  }
    push();
    noStroke();
    fill(255,0,0);
    textSize(30);
  	text(skore, 10,30);
select('#score').html(skore);
    pop();
  
}
function umrti() {
push();
  noLoop();
  nomoreclick = 1;
  setTimeout(function(){nomoreclick = 0}, 2000);
  if (skore > rekord) {
    rekord = skore;
select('#rekord').html(rekord);
}
  if (skore > 0) {
	dskore = skore;
  select('#score').html(skore);
	
}
      fill(120,10,10);
      textSize(100);
    text("zemřel si", 30, 210);
  fill(10,0,100);
  textSize(20);
  text("tvoje score:", 60, 250);
  textSize(50);
  text(dskore, 210, 260);
  fill(0);
  textSize(20);
  text("rekord: "+ rekord, 300,250);
  textSize(12);
  text('kliknutím kamkoli začni znovu', 120, 320);
  
  skore = 0;
  t.vp = [];
  t.x = [];
  t.xcheck = [];
	checkumrel = 0;
      pop();
}
