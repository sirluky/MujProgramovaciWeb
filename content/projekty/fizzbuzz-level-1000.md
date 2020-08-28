---
title: FizzBuzz level 1000
desc: Originální řešení FizzBuzz challenge
date: 2019-07-22T16:29:00.000Z
libs:
  - JS
mobile: false
scroll: false
---
<div id="countdown-timer">

</div>

<script>

let countdown= 20;
let interval = setInterval(v => {

if(--countdown > 0){

document.querySelector("#countdown-timer").innerHTML = `<h2>${countdown}</h2>`

} else {

clearInterval(interval)

document.querySelector("#countdown-timer").innerHTML = `<script id="asciicast-VuqEe0eLwE20Ma9o6sTgStGNn" src="https://asciinema.org/a/VuqEe0eLwE20Ma9o6sTgStGNn.js" async></script>`

}

},1000)

</script>