---
title: FizzBuzz - 10 minutes challenge
desc: >-
  Pokus o vytvoření dětské hříčky na dělení Fizzbuzz do 10 minut. Zkouknul jsem
  pravidla a pak hned psal. Zbývající čas jsem poté využil k úpravě designu.
tags:
  - ostatní
date: 2019-07-27T07:50:04.277Z
mobile: false
scroll: false
---
Zkouknul jsem první 1:30 tohoto [videa](https://www.youtube.com/watch?v=QPZ0pIK_wsc) a potom hned začal psát.
Psal jsem jej v P5.JS web editoru, můžete si jej otevřít [zde](https://editor.p5js.org/sirluky/sketches/__Z3ZeH5B).


<script>
let counter = 1;
let ymove = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(30)
}

function draw() {
  background(220);
  for (let i = counter; i < counter + 7; i++) {
    let atext = ""
    if (i % 3 === 0) {
      atext += "Fizz"
    }
    if (i % 5 === 0) {
      atext += "Buzz"
    }
    text("Turn: " + counter, 20, 20)
    push()
    textAlign(CENTER)
    textSize(30)
    const numorbuzz = atext.length > 0 ? atext : i;
    if (i % 2 === 1) {
      fill(150,150,255)
    } else {
      fill(255, 150, 150);
    }
    rectMode(CENTER)
    rect(i % 2 === 0 ? 300 : 100, (i - counter) * 80 - ymove-10,150,50)
    fill(255,255,255)
    text(numorbuzz, i % 2 === 0 ? 300 : 100, (i - counter) * 80 - ymove)
    pop()

  }

  if (ymove % 80 === 0) {
    ymove = 0
    counter++;

  }
  ymove += 10;
}
</script>
