function dieClicked(event) {
  event.target.innerHTML = "";
}
var element = document.getElementById("die1");
element.addEventListener("click", dieClicked);
