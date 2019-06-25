let mujfont;
let x = 0;
let y = 0;
let vpisma = 34;
let spismeno = 0;
let aktuality = ['A','K','T','U','A','L','I','T','Y',' '];
let ctext = [''];
let napispoz = 0;
let celynapis = ['a','k','t','u','a','l','i','t','y']
let napis = 'a';
let nx = 400;
let ny = 240;

let pinfo11 = 0;
let pinfo12 = 0;
let sinfotext1 = ['',''];
let info1 = [['P','O','Ř','A','D',' ', 'Ú','S','T','Ř','E','D','N','Í',' ', 'R','E','D','A','K','C','E'],['T','E','L','E','V','I','Z','N','Í','C','H',' ', 'N','O','V','I','N']];



let pinfo21 = 0;
let pinfo22 = 0;
let sinfotext2 = ['',''];
let info2 = [['U','V','Á','D','Í'],['M','I','R','O','S','L','A','V',' ','F','O','Ř','T']];


function preload(){
    mujfont = loadFont('./font.ttf');
}
function setup(){
    frameRate(30);
    createCanvas(640,480);
    napis = celynapis[napispoz];
}
function draw(){
      background(19,23,215);
    
   pozaditext();
    nadpis();
    
}
function pozaditext(){
    if(ctext.length <= height/40-1){
         
        ctext[y] += aktuality[spismeno];

        
        spismeno++;
    if(spismeno >= aktuality.length)
    spismeno = 0;
    x += vpisma*0.5;
    
    if(x >= width-vpisma){
        if(spismeno === spismeno.length-1)
            spismeno = 0;
        x = 0;
        y += 1;
        ctext.push('');
    }
        
        
    }
//    rect();
    push()
    noStroke();
        fill(255,100);
        textFont(mujfont);
        textSize(vpisma);
    for(let i = 0; i < ctext.length; i++){
          text(ctext[i],10,i*40+40); 
        }
    pop()
    
}

function nadpis() {
     if(napispoz < celynapis.length-1) {
    if(frameCount % 20 == 0){
        if(nx > 100)
        nx -= 50;
        else{
            napispoz++;
            napis += celynapis[napispoz];
        }
        
    }
     }
     
    else{
        infotext();
    }
        push()
        fill(255);
    textStyle(ITALIC);
        textSize(115);
        stroke(0);
        strokeWeight(3);
        
        text(napis, nx,ny)
        pop()
    
}
function infotext(){
    
    
   
        if(pinfo12 < info1[1].length){
            if(frameCount % 6 == 0){
                   if(pinfo11 < info1[0].length){
                        sinfotext1[0] += info1[0][pinfo11];

                        pinfo11++;
                   } else {
                       sinfotext1[1] += info1[1][pinfo12];
                       pinfo12++;
                   }
            }
        
    

   
    push()
        textSize(30);
        textStyle(BOLD);
        fill(255);
        text(sinfotext1[0],80,340);
    pop()
    
     push()
        textSize(30);
        textStyle(BOLD);
        fill(255);
        text(sinfotext1[1],110,410);
    pop()
       } else
            infotext2();
    
}

function infotext2(){
    
    
   if(frameCount % 8 == 0){
        if(pinfo22 < info2[1].length){
               if(pinfo21 < info2[0].length){
            sinfotext2[0] += info2[0][pinfo21];

             pinfo21++;
               } else{
                   sinfotext2[1] += info2[1][pinfo22];
                   pinfo22++;
               }
        }
   }
    

   
    push()
        textSize(30);
        textStyle(BOLD);
        fill(255);
        text(sinfotext2[0],280,340);
    pop()
    
     push()
        textSize(30);
        textStyle(BOLD);
        fill(255);
        text(sinfotext2[1],180,410);
    pop()
    
}