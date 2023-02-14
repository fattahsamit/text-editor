// Font Size
const size = document.getElementById("font-size");
text.style.fontSize = size.value + "px";

size.addEventListener("change", function () {
  if (this.value <= 0 || isNaN(this.value)) {
    return;
  }
  text.style.fontSize = this.value + "px";
});
