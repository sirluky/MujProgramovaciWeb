---
title: Hledání min
desc: 'Moje verze hledání min, moje nejoblíbenější "jednoduchá" hra vůbec.'
tags:
  - hry
date: 2019-07-22T17:55:00.000Z
thub: /images/miny-32.png
libs:
  - P5.JS
mobile: false
---

Toto je mnou naprogramovaná verze hry Hledani min (minesweeper),<!--more--> v budoucnu plánuji přidat scorecounter, časovac, opravit/vylepšit generátor rozpoložující miny a nekolik dalších vecí vylepšující hratelnost.

Moje nejoblíbenější vlastní hra vůbec.

<div id="keschovani">
    pocet min <input type="text" id="pocetmin" value="50">
      velikost hraci plochy (x*x)<input type="text" id="plocha" value="20"><br>
    <button onclick="gen()">generovat</button>
        </div>
    <p id="topbar"></p>
<script src="sketch.js"></script>
