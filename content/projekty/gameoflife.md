---
title: Game of Life ("hra" života)
desc: Populární "matematická hra" řídící se jednoduchýmy pravidly...
tags:
  - hry
date: 2019-06-23T18:00:00.000Z
thub: /images/goflife.png
libs:
  - P5.JS
redirect: ''
mobile: false
---

Bakterie jsou obdoba buněčného automatu, který vymyslel britský matematik John Horton Conway v roce 1970. Celou tuto hru řídí čtyři jednoduchá pravidla:

1. Živá bakterie s méně, než dvěma živými sousedy umírá.
2. Živá bakterie s více, než třemi živými sousedy umírá na přemnožení.
3. Živá bakterie s dvoumi nebo třemi sousedy přežívá beze změny do další generace.
4. Mrtvá bakterie, s přesně třemi živými sousedy, opět ožívá.

Pokud tuto hru neznáte, doporučuji se podívat na [Pixelorezovo video](https://www.youtube.com/watch?v=zXRE9ZoVo94)

<script src="goflifeAlg.js"></script>
<script src="sketch.js"></script>
