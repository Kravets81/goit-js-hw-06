const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const inputRef = document.querySelectorAll("input");

  inputRef.forEach((input) => {
    if (input.value.trim() === "") {
      alert("error");
    }
  });

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  const formValues = {};

  formData.forEach((name, value) => {
    formValues[name] = value;
  });
  console.log(formValues);
}

formRef.addEventListener("submit", (event) => {
  event.target.reset();
});
