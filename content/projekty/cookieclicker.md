---
title: 'Sušenko-clicker'
date: 2019-06-25T11:47:49+02:00
draft: false
libs: [JS]
thub: 'https://place-hold.it/640x360'
tags: [hry]
mobile: true
---

<link rel="stylesheet" type="text/css" href="cookiegame.css">
<small>Moje prvni hra, kterou jsem kdy, vytvoril.</small>

<p>cilem je mit co nejvice sušenek (klikej na susenku), sušenku si můžeš postupně vylepšovat</p>

<button class="susenka" onclick="kliknul()" id="susenka"><img src="cookieold.png"></button>
<br>

<div class="bonus" id="bonus" onclick="desetkrat()">

<h2 >(ZDARMA) 3x více sušenek na 15s</h2>
<p>(kliknete) Aktivujte co nejdrive po 60 sekundach tato nabidka zmizi</p>

</div>
<p>počet sušenek</p>
<div class="kolemtextsusky">
<p id="textsusky" class="textsusky">LOADING...</p><br>
</div>
<br>
<form name="klik">

cena vylepseni<input class="vetsi" type="text" name="cena">
susenky za kliknuti<input class="pocet" type="text" name="pocet">
<br>

</form>

<button onclick="vylepsi()">koupit vylepšení (+1 sušenka za klik)</button><button onclick="vykup()">vykoupit</button><br><br>

<form name="klikatk">
cena klikatka<input class="vetsi" type="text" name="cena"> 
pocet klikatek<input class="pocet" type="text" name="pocet"> 
</form>

<button onclick="kupK()">koupit klikatko (Klikne na sušenku 1x za 3 sec)</button><button onclick="vykupK()">vykoupit</button><br><br>

<form name="bab">
cena babicky<input class="vetsi" type="text" name="cena">
pocet babicek<input class="pocet" type="text" name="pocet"> 
</form>

<button onclick="kupB()">koupit babičku (+1 sušenka za sec.)</button><button onclick="vykupB()">vykoupit</button><br>

<script type="text/javascript" src="cookiegam.js"></script>

<br><br><br><br><br><br><br>

<p><b>Poslední změny<br></b>
<!--<b> x.12.2017 </b><br>-  <br>-->
<b> 13.12.2017 </b><br>- Příprava na nové vylepšení  <br>
<b> 12.12.2017 </b><br>- Předělané zobrazování aktualního počtu sušenek<br>-Opravy chyb  <br>
<b> 11.12.2017 </b><br>- Nové tlačítko "vykoupit"<br>- Úpravy cen, ceny jsou o něco více vyvážené <br>
<b> 10.12.2017 </b><br>- Nové vylepšení (klikátka) <br>
<b> 9.12.2017 </b><br>- úprava vzhledu <br>- příprava na přidání nových vylepšení <br>- oprava chyb<br> 
<b> 8.12.2017 </b><br>- začínám psát seznam změn<br>- zlevněné vylepšování <br>- speciální bonus při dosažení hodnoty 1001 sušenek  <br><br>
<b>V budoucnu</b> <br>- Více vylepšení <br>- Snížení velikosti rozlišení sušenky ma 0,5 MB jako PNG a v Webp ma velikost 0.1 MB (Pri deteckci prohlizece Google Chrome se automaticky nacte obrazek ve Webp) <br>- Lepší vzhled <br>- A hlavně, všechno ostatní co mě napadne !!!</p>
