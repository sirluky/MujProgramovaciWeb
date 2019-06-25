let skore = document.querySelector('#skore');
let rekord = document.querySelector('#rekord');


function saveCurrentStatus() {
  localStorage.setItem("skore",skore.textContent)
  localStorage.setItem("rekord",rekord.textContent)
  localStorage.setItem("grid",JSON.stringify(grid))
  localStorage.setItem("selection",JSON.stringify(selections))

}
function loadStatus() {
  skore.textContent = localStorage.getItem("skore");
  rekord.textContent = localStorage.getItem("rekord");
  grid = JSON.parse(localStorage.getItem("grid"));
  let selvals = JSON.parse(localStorage.getItem("selection"));
  
  setSel(selections[0],selvals[0])
  setSel(selections[1],selvals[1])
  setSel(selections[2],selvals[2])
  
}

function setSel(sel,v){
  sel.id = v.id;
  sel.disabled = v.disabled;
  sel.x = v.x;
  sel.y = v.y;
  sel.shape = v.shape
}