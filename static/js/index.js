console.log('hello world');
let slCount = 0;
let prevSlIndex = 0;

const slsh = document.querySelector('#slideshow');
const sltext = document.querySelector('#phototext');
const slDots = document.querySelectorAll('.gallery-dots div');
slDots.forEach(e => (e.onclick = changePhoto));
let sltextA = [];
document.querySelectorAll('#slideshow .photo').forEach(p => sltextA.push(p.getAttribute('popis')));

// let sltextA = [
//   'Úspěchy našich studentů',
//   'Česká Třebová má nové Centrum informačních technologií a Elektroniky',
//   ' Dny otevřených dveří na VOŠ a SŠT Česká Třebová',
// ];
function changePhoto(e) {
  slCount = e.target.getAttribute('index');
  slsh.style.left = `-${slCount}00%`;
  sltext.innerText = sltextA[slCount];
  slDots[prevSlIndex].removeAttribute('aktivni');
  slDots[slCount].setAttribute('aktivni', '');
  prevSlIndex = slCount;
}

slsh.style.left = `-${slCount}00%`;
sltext.innerText = sltextA[slCount];
slDots[slCount].setAttribute('aktivni', '');

setInterval(e => {
  slCount = (slCount + 1) % slDots.length;

  slsh.style.left = `-${slCount}00%`;
  sltext.innerText = sltextA[slCount];
  slDots[prevSlIndex].removeAttribute('aktivni');
  slDots[slCount].setAttribute('aktivni', '');
  prevSlIndex = slCount;
}, 3500);
