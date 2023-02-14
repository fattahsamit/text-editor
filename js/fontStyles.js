// Bold
const bold = document.getElementById("bold");
bold.addEventListener("click", function () {
  this.classList.toggle("outline");
  text.classList.toggle("font-bold");
});

// Italic
const italic = document.getElementById("italic");
italic.addEventListener("click", function () {
  this.classList.toggle("outline");
  text.classList.toggle("italic");
});

// Underline
const underline = document.getElementById("underline");
underline.addEventListener("click", function () {
  this.classList.toggle("outline");
  text.classList.toggle("underline");
});
