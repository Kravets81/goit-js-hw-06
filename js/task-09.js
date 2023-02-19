function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");

buttonRef.addEventListener("click", changeColor);

function changeColor(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  buttonRef.textContent = getRandomHexColor();
}
