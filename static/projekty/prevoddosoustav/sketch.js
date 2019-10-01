let zsous, dosous, cislo, vysledek, bpocitej;
let ci = 0;
const abeceda = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
function setup() {
  noCanvas();
  createP('Číslo:');
  cislo = createInput('0');
  createP('Ze soustavy:');
  zsous = createInput('10');
  createP('');
  let vymen = createButton('⇆');
  createP('Do soustavy:');
  dosous = createInput('2');
  createP('');
  bpocitej = createButton('Převeď');
  bpocitej.mousePressed(function() {
    vypocitej(cislo.value(), int(zsous.value()), dosous.value());
  });
  vymen.mousePressed(function(){
    let pm = zsous.value();
    zsous.value(dosous.value());
    dosous.value(pm);
  })
  vysledek = createP('');
  //    del = createP("nejakej text");
}

function vypocitej(c, z, d) {
  if (d > 1 && z > 1) {
    let v10 = preveddo10(c, z);
    let dx = doX(v10, d);
    vysledek.html('vysledek je: ' + dx);
  } else {
    alert('Lagggggggggggggggggggg');
    alert('gggggggggggggggggggggg');
    alert('Error 3159743');
    alert('Co to na mě zkoušíš? jedničková nebo nulová soustava neexistuje.');
    alert('I když je pravda že tu nějaké ty chybičky v kodu budou.');
  }
  ci = 0;
}
function preveddo10(c, z) {
  if (z !== 10) {
    let strc = c + '';
    let hodnot = [];
    for (ci = 1; ci <= strc.length; ci++) {
      let ah = strc.substring(ci - 1, ci);
      if (ah != parseInt(ah)) {
        ah = toNum(strc, ah);
      }
      console.log(ah);
      ah = int(ah);
      let m = int(strc.length - ci);
      //            console.log(ah,m,z)
      let mh = mocni(ah, m, z);
      hodnot.push(mh);
    }
    c = secti(hodnot);
  }
  return c;
}

function mocni(c, m, z) {
  let n = 1;
  for (let i = 0; i < m; i++) {
    n = n * z;
  }
  n = n * c;
  return n;
}
function secti(h) {
  let s = 0;
  for (let i = 0; i < h.length; i++) {
    s += h[i];
  }
  return s;
}
function doX(c, d) {
  let pv = [];
  while (c > 0) {
    let pom = c % d;
    c = floor(c / d);
    if (pom > 9) pom = toLetter(pom);
    pv.push(pom);
  }
  //    console.log(pv);
  pv = obratit(pv);
  console.log(pv);
  pv = spoj(pv);
  return pv;
}
function obratit(pole) {
  let pom = [];
  for (let i = pole.length - 1; i >= 0; i--) {
    pom.push(pole[i]);
  }
  return pom;
}
function spoj(pole) {
  let s = '';
  for (let i = 0; i < pole.length; i++) {
    s += pole[i];
  }
  return s;
}
//function toLetter(c) {
//    if(c === 10)
//        c="a";
//    else if(c === 11)
//        c="b";
//    else if(c === 12)
//        c="c";
//    else if(c === 13)
//        c="d";
//    else if(c === 14)
//        c="e";
//    else if(c === 15)
//        c="f";
//    else if(c === 16)
//        c="g";
//    else if(c === 17)
//        c="h";
//    else if(c === 18)
//        c="i";
//    else if(c === 19)
//        c="j";
//    else if(c === 20)
//        c="k";
//    else if(c === 21)
//        c="l";
//    else if(c === 22)
//        c="m";
//    else if(c === 23)
//        c="n";
//    else if(c === 24)
//        c="o";
//    else if(c === 25)
//        c="p";
//    else if(c === 26)
//        c="q";
//    else if(c === 27)
//        c="r";
//    else if(c === 28)
//        c="s";
//    else if(c === 29)
//        c="t";
//     else if(c === 30)
//        c="u";
//     else if(c === 31)
//        c="v";
//     else if(c === 32)
//        c="w";
//     else if(c === 33)
//        c="x";
//     else if(c === 34)
//        c="y";
//     else if(c === 35)
//        c="z";
//    else
//        c = "{" + c + "}";
//    return c;
//}
//
function toLetter(p) {
  let finded = false;
  for (let i = 10; i < abeceda.length + 10; i++) {
    if (p === i) {
      p = abeceda[i - 10];
      finded = true;
      break;
    }
  }
  if (finded === false) {
    p = '{' + p + '}';
  }
  return p;
}
function toNum(ori, n) {
  //    console.log('pismeno');
  let finded = false;
  for (let i = 10; i < abeceda.length + 10; i++) {
    if (n === abeceda[i - 10]) {
      n = i;
      finded = true;
      break;
    }
  }
  if (!finded && n == '{') n = notListed(ori);
  //    else
  //        n = 0;
  return n;

  function notListed(ori) {
    let logit = '';
    //        console.log(ori);
    let i = ci;
    for (i; i < ori.length; i++) {
      //            console.log(ori.substring(i,i+1));
      if (ori.substring(i, i + 1) == '}') {
        //                console.log("custom");
        break;
      } else logit += ori.substring(i, i + 1);
    }
    ci = i + 1;
    console.log(logit);
    return logit;
  }
}

//    let finded = false;
//    for(let i = 10; i < abeceda.length+10; i++) {
//        if(n === i){
//            n = abeceda[i-10];
//            finded = true;
//            break;
//        }
//    }
//    if(finded === false){
//        n = "{" + n + "}";
//    }
//    return n;
//}
