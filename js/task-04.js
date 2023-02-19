let counterValue = 0;

const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

const incrementClickRef = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

const decrementClickRef = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

buttonDecrementRef.addEventListener("click", decrementClickRef);
buttonIncrementRef.addEventListener("click", incrementClickRef);
