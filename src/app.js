import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'hugged', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
let why = ['because the sun was shining', 'because the Hungry Caterpillar ate eveything', 'because I said "Hi"', 'because everyone won a free pizza'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function generateExcuse() {
  let excuse = `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)} ${getRandomItem(why)}.`;
  document.getElementById("excuse").innerText = excuse;
  console.log(excuse); 
}

generateExcuse();

document.getElementById("excuse").onclick = generateExcuse
}
