class Ball{
    constructor(size = 30) {
        this.x =  width/2;
        this.y = size; 
        this.size = size;
        this.accx = 0;
        this.velx = 0;
        this.body = 0;
		this.circuit = this.size*PI;
    }
    move() {
        if (prohral === false) {
        if(this.dotyk === true) 
            this.moveongrass();
        else {
            this.y += 3;
            this.velx = 0;
        }
//        if(keyIsPressed) {
//            this.acc.x = 
//        }
        }
        else {
            this.y = -1000;
        }
    }
    show() {
        if (this.lose() === true) {
            fill(180,0,0);
            textSize(100);
            textAlign(CENTER);
            text("prohral jsi", width/2,height/2-75)
        } else if (this.y > height/4*3)
            zrychligrass();
        else if (zrychleno === true && this.y < height/4*3) {
            grassspeed = actualgspeed;
            zrychleno =false;
        }
        fill(255,50,50);
         push();
        translate(this.x,this.y);
        var getrotate = map(this.x -240% this.circuit, 0, this.circuit, 0 , 2*PI);
        rotate(getrotate);
        fill(255,200,50);
        ellipse(0, 0, this.size,this.size);
        noStroke();
        fill(100,100,255);
        ellipse(3,-4,5,5);
         ellipse(-3,-4,5,5);
        fill(255,50,50);
        ellipse(0,4,12,3);
        pop();
    }
    dotykasetravy() {
        this.dotyk = false;
        for (let i = 0; i < grass.length;i++) {
        if(this.y+this.size/2 >= grass[i].y && this.y+this.size/2 <= grass[i].y+10 && !(this.x-this.size/2 > grass[i].xpos && this.x+this.size/2 < grass[i].xpos+mezera)) {
            this.dotyk = true;
            this.gy = grass[i].y-this.size/2;
            
        }
        }
    }
    moveongrass() {
        this.y = this.gy;
        this.velx *= 0.9;
        this.x += this.velx;
        if(keyIsPressed) {
            if(keyCode === RIGHT_ARROW)
            //this.x += 2;
                this.xspeed(1);
            if(keyCode === LEFT_ARROW)
//            this.x -= 2;
                this.xspeed(-1);
        }
        if(this.x > width) {
            this.x = 0;
        }
        if(this.x < 0) {
            this.x = width;
        }
    }
    xspeed(smer) {
        this.accx = smer*0.5;
        this.velx += smer*0.5;
       
    }
    lose() {
        if(this.y <= 0) {
            prohral = true;
            return true;
        }
    }
    score() {
        for (var i = 0; i < grass.length; i++) {
        if(grass[i].y <= this.y+this.size && grass[i].passed === false) {
            grass[i].passed = true;
            this.body++;
            actualgspeed = this.body*0.01+0.75;
		select('#score').html(this.body);
            
        }
            
        }
    }
}