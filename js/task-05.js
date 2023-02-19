const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (refs.input.value === "") {
    refs.name.textContent = `Anonymous`;
  } else {
    refs.name.textContent = refs.input.value;
  }
}
