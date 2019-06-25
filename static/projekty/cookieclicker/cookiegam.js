       //zakladni hodnoty
        var bonus = document.getElementById("bonus");
       bonus.style.display = "none";
        var zdk = false;
        var nbs = false;
        var barvasusky;
        var stoji = 20;
        var ruce= 1;
        var citadlo = 0;
        var stojiB = Math.floor(stoji);
        var babicky = 0;
        var klikatko = 0;
        var stojiK = stoji-1;

        window.onload = function() {

        setInterval(podobe, 1000);
        setInterval(klikatka, 3000);
        var susenka = document.getElementById("susenka");
        }
        //cena
        document.klik.cena.value=stoji;
        document.bab.cena.value=stojiB;
        document.klikatk.cena.value=stojiK;
        //počet (množství)
        document.klik.pocet.value=ruce;
        document.bab.pocet.value=babicky;
        document.klikatk.pocet.value=klikatko;
        //konec seznamu zakladnich hodnot




         function kliknul() {
            citadlo += ruce ;
        document.getElementById("textsusky").innerHTML = citadlo;
         }
         
        function vylepsi() {
            if (citadlo >= stoji) {
            citadlo= citadlo - stoji;
            ruce++;
            stoji= Math.floor(stoji*1.2); 
            document.klik.cena.value=stoji;
           document.getElementById("textsusky").innerHTML = citadlo;
           document.klik.pocet.value=ruce;
            
            }
			else {
            document.klik.cena.value= "nemate dostatek susenek, vylepseni stoji " + stoji + " susenek.";
				setTimeout(function() {document.klik.cena.value=stoji;}, 1200)
			
			}
		}
        function kupB() {
            if (citadlo >= stojiB) {
                citadlo= citadlo - stojiB;
                babicky++;
                stojiB = Math.floor(stojiB*1.06);
                document.bab.cena.value=stojiB;
                document.getElementById("textsusky").innerHTML = citadlo;
                document.bab.pocet.value=babicky;


            }
			else {
            document.bab.cena.value= "nemate dostatek susenek, vylepseni stoji " + stojiB + " susenek.";
				setTimeout(function() {document.babi.cena.value=stojiB;}, 1200)
			}
		}

        function podobe() 
        {
            
            citadlo = Math.floor(citadlo + babicky);
            document.getElementById("textsusky").innerHTML = citadlo;
            if (citadlo > 1000 && zdk == false) {
            zobdesetkrat();
            }
           /*else
            if (citadlo > 6000 && citadlo < 11999 && ) {
                zobnabijse();
            }*/
        }
        /*
        function zobnabijse() {
            barvasusky = document.getElementById("susenka").style.backgroundColor;
            document.getElementById("susenka").style.backgroundColor = "lightgreen";
            
        }
		*/
        function zobdesetkrat() {
            zdk = true;
            bonus.style.display = "block";
            setTimeout(function() {
                bonus.style.display = "none";
            }, 60000);
        }
        function desetkrat() {
            
            var bonus = document.getElementById("bonus");
            if (bonus.style.display === "block" ); {
                bonus.style.display = "none";
            babicky = babicky*3;
            ruce = ruce*3;
            barvasusky = document.getElementById("susenka").style.backgroundColor;
            document.getElementById("susenka").style.backgroundColor = "yellow";

            setTimeout(function() {
                babicky = babicky/3;
                ruce = ruce/3;
                document.getElementById("susenka").style.backgroundColor = barvasusky;
            }, 15000);
        }
    }
      /*  function nabijse() {
            barvasusky = document.getElementById("susenka").style.backgroundColor;
            document.getElementById("susenka").style.backgroundColor = "yellow";

            setTimeout(function() {
                babicky = babicky/10;
                ruce = ruce/10;
                document.getElementById("susenka").style.backgroundColor = barvasusky;
            }, 10000);
        }*/
        function klikatka() {
            citadlo += ruce*klikatko;
            document.getElementById("textsusky").innerHTML = citadlo;
        }

        function kupK() {
            if (citadlo >= stojiK) {
                citadlo= citadlo - stojiK;
                klikatko++;
                stojiK = Math.floor(stojiK * 1.2);
                document.klikatk.cena.value=stojiK;
                document.getElementById("textsusky").innerHTML = citadlo;
                document.klikatk.pocet.value=klikatko;


            }
			else {
            document.klikatk.cena.value= "nemate dostatek susenek, vylepseni stoji " + stojiK + " susenek.";
				setTimeout(function() {document.klikatk.cena.value=stojiK;}, 1200);
			}
        }
        function vykup() {
            while (citadlo >= stoji) {
                citadlo -= stoji;
                ruce++;
                stoji = Math.floor(stoji*1.2); 
                document.klik.cena.value=stoji;
                document.klik.pocet.value=ruce;
                document.getElementById("textsusky").innerHTML = citadlo;

            }
            
        }
		function vykupB() {
            while (citadlo >= stojiB) {
                citadlo -= stojiB;
                babicky++;
                stojiB = Math.floor(stojiB*1.06); 
                document.bab.cena.value=stojiB;
                document.bab.pocet.value=babicky;
                document.getElementById("textsusky").innerHTML = citadlo;

            }
		
        }
        function vykupK() {
            while (citadlo >= stojiK) {
                citadlo -= stojiK;
                klikatko++;
                stojiK = Math.floor(stojiK*1.2); 
                document.klikatk.cena.value=stojiK;
                document.klikatk.pocet.value=klikatko;
                document.getElementById("textsusky").innerHTML = citadlo;

            }


        }
		//alert("ahoj");
	//document.getElementById("textsusky").innerHTML = "ahoj jak se mas";


		