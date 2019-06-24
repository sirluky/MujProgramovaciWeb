---
title: 'Hledání min'
date: 2019-06-23T19:30:35+02:00
libs: ['P5.JS']
desc:
thub: 'https://place-hold.it/640x360'
draft: false
---

Toto je mnou naprogramovaná verze hry Hledani min (minesweeper),<!--more--> v budoucnu plánuji přidat scorecounter, časovac, opravit/vylepšit generátor rozpoložující miny a nekolik dalších vecí vylepšující hratelnost

<div id="keschovani">
    pocet min <input type="text" id="pocetmin" value="50">
      velikost hraci plochy (x*x)<input type="text" id="plocha" value="20"><br>
    <button onclick="gen()">generovat</button>
        </div>
    <p id="topbar"></p>
<script src="sketch.js"></script>
