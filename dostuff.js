function dieClicked(event) {
  event.target.innerHTML = "";
}
function diceRoll(dieSize) {
  return Math.floor(Math.random() * dieSize + 1);
}

var element = document.getElementById("die1");
var element2 = document.getElementById("die2");
var element3 = document.getElementById("die3");
var element4 = document.getElementById("die4");

element.addEventListener("click", dieClicked);
element2.addEventListener("click", dieClicked);
element3.addEventListener("click", dieClicked);
element4.addEventListener("click", dieClicked);

console.log(diceRoll(6));
