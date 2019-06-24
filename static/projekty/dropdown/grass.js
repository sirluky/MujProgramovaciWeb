function zrychligrass() {
    if (zrychleno === false ) {
    grassspeed = 5;  
    zrychleno = true;
    }
}
class Grass{
    constructor(y = height) {
        this.xpos = random(10,width-10-mezera);
        this.y = y;  
        this.check = false;
        this.passed = false;
    }
    show() {
        //zleva
        fill(151,80,0);
        rect(0,this.y,this.xpos,10);
        fill(179,227,0);
        rect(0,this.y+1,this.xpos,-3);
        //zprava
        fill(151,80,0);
        rect((this.xpos+mezera),this.y,width,10);
        fill(179,227,0);
        rect(this.xpos+mezera,this.y+1,width,-3);
    }
    move() {
        if(zrychleno === false)
            grassspeed = actualgspeed;
        this.y -= grassspeed;
    }
}
function checkgrass() {
    for (var i = 0; i < grass.length ; i++) {
if (grass[i].y < 530 && grass[i].check === false) {
    grass[i].check = true;
    createGrass();
}}
    
    if(grass.length > 6)
        grass.splice(0,1);

}
function createGrass() {
    grass.push(new Grass());
}
