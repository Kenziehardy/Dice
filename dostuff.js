function d6Clicked(event) {
  event.target.innerHTML = diceRoll(6);
}
function d8Clicked(event) {
  event.target.innerHTML = diceRoll(8);
}
function d12Clicked(event) {
  event.target.innerHTML = diceRoll(12);
}
function d20Clicked(event) {
  event.target.innerHTML = diceRoll(20);
}

function diceRoll(dieSize) {
  return Math.floor(Math.random() * dieSize + 1);
}

var element = document.getElementById("die1");
var element2 = document.getElementById("die2");
var element3 = document.getElementById("die3");
var element4 = document.getElementById("die4");

element.addEventListener("click", d6Clicked);
element2.addEventListener("click", d8Clicked);
element3.addEventListener("click", d12Clicked);
element4.addEventListener("click", d20Clicked);
