var sance, oznacena = 0;
function pravdepodobnost() {
    
 for (let dO  = 0; dO < places.length; dO++) {
        for (let dI = 0; dI < places[0].length; dI++) { 
            if (places[dO][dI].n !== 0 && places[dO][dI].hidden === false) {
            sance=0;
                oznacena = 0;
            let o = dO + 1;
            let i = dI;
                if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true) {
                    if(places[o][i].ozn === true)
                        oznacena++;
                    sance++;
                }
                 o = dO + 1;
                i = dI -1;
                if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true) {
                    if(places[o][i].ozn === true)
                        oznacena++;
                    sance++;
                }
                o = dO + 1;
                i = dI + 1;
               if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true) {
                   if(places[o][i].ozn === true)
                        oznacena++;
                    sance++;
                }

                o = dO;
                i = dI - 1;
               if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true) {
                   if(places[o][i].ozn === true)
                        oznacena++;
                    sance++;
                }

    
                o = dO;
                i = dI + 1;
               if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true) {
                   if(places[o][i].ozn === true)
                        oznacena++;
                    sance++;
                }

                o = dO - 1;
                i = dI - 1;
                 
                if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true) {
                    if(places[o][i].ozn === true)
                        oznacena++;
                    sance++;
                }

                o = dO - 1;
                i = dI;
                 if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true) {
                     if(places[o][i].ozn === true)
                        oznacena++;
                    sance++;
                }

                o = dO - 1;
                i = dI + 1;
                 if(o < places.length && i < places[0].length && i >= 0 && o >= 0 &&  places[o][i].hidden === true) {
                     if(places[o][i].ozn === true)
                        oznacena++;
                    sance++;
                }
                //if(places[dO][dI].n - oznacena !== 0)
                sance = (places[dO][dI].n - oznacena)/sance;
           //console.log(sance);
            
    pravdepodobnostshow(dO,dI, sance);
            }
        }
 }
}
function pravdepodobnostshow(x,y, intensity) {
    push();
        
            stroke(180);
           fill(map(intensity, 0, 1, 0,255),map(intensity, 1,0, 0,255),0, 50);
        //fill(125);
            rect(x*minesize,y*minesize,minesize,minesize);
    pop();
    }