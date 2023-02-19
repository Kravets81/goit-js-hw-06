function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divRef = document.querySelector("#controls");
const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

buttonCreateRef.addEventListener("click", createBoxes);
buttonDestroyRef.addEventListener("click", destroyBoxes);

let amount;
const allBoxes = [];

function createBoxes() {
  amount = Number(inputRef.value);

  for (let index = 0; index < amount; index += 1) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    newDiv.style.width = 20 + `${index}` * 10 + `px`;
    newDiv.style.height = 20 + `${index}` * 10 + `px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    allBoxes.push(newDiv);
    console.log(allBoxes);
  }
  boxesRef.append(...allBoxes);
  allBoxes.length = 0;
}

function destroyBoxes() {
  inputRef.value = "";
  boxesRef.innerHTML = "";
}
