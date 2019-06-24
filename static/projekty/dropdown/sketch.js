var grass = [], grasses, mezera = 50, ball, grassspeed = 0.75, zrychleno = false, actualgspeed = 0.75, prohral= false; 
function setup() {
createCanvas(480,640);
    background(167,234,255);
    
    grass.push(new Grass());
    ball = new Ball(20);
}

function draw() {
    checkgrass();
     background(167,234,255);
    for (var i = 0; i < grass.length; i++) {
    grass[i].move();
    grass[i].show();
    }
    ball.dotykasetravy();
    ball.score();
    ball.move();
    
    ball.show();
    textSize(30);
    textAlign(LEFT);
    text(ball.body,0, 30);
}

