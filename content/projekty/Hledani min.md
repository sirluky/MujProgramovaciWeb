---
title: 'Hledání min'
date: 2019-06-24T19:29:35+02:00
draft: true
libs:
  [
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.sound.min.js',
  ]
thub: 'https://place-hold.it/640x360'
---

Toto je mnou naprogramovaná verze hry Hledani min (minesweeper),<!--more--> v budoucnu plánuji přidat scorecounter, časovac, opravit/vylepšit generátor rozpoložující miny a nekolik dalších vecí vylepšující hratelnost

<div id="keschovani">
    pocet min <input type="text" id="pocetmin" value="50">
      velikost hraci plochy (x*x)<input type="text" id="plocha" value="20"><br>
    <button onclick="gen()">generovat</button>
        </div>
    <p id="topbar"></p>
<script src="http://mpw.8u.cz/hledanimin/sketch.js"></script>
