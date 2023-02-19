const ref = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

ref.fontSizeControl.addEventListener("input", fontSizeValue);

function fontSizeValue(event) {
  ref.text.style.fontSize = this.value + "px";
}
