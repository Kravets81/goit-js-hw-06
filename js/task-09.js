function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const colorValue = document.querySelector("span.color");

buttonRef.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorValue.textContent = color;
});
