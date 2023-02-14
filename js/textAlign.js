// Left
const left = document.getElementById("align-left");
left.addEventListener("click", function () {
  this.classList.toggle("outline");
  text.classList.toggle("text-left");
});

// Center
const center = document.getElementById("align-center");
center.addEventListener("click", function () {
  this.classList.toggle("outline");
  text.classList.toggle("text-center");
});

// Right
const right = document.getElementById("align-right");
right.addEventListener("click", function () {
  this.classList.toggle("outline");
  text.classList.toggle("text-right");
});

// Justify
const justify = document.getElementById("align-justify");
justify.addEventListener("click", function () {
  this.classList.toggle("outline");
  text.classList.toggle("text-justify");
});
