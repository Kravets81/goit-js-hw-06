const ref = {
  input: document.querySelector("#validation-input"),
};

const validLength = Number(ref.input.dataset.length);

ref.input.addEventListener("input", onInput);

function onInput(event) {
  const inputValueLength = event.target.value.length;

  if (inputValueLength === validLength) {
    ref.input.classList.add("valid");
    ref.input.classList.remove("invalid");
  } else {
    ref.input.classList.add("invalid");
    ref.input.classList.remove("valid");
  }
}
