const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsLiListRef = ingredients.map((name) => {
  const liRef = document.createElement("li");
  liRef.textContent = name;
  liRef.classList = "item";

  return liRef;
});

ingredientsListRef.append(...ingredientsLiListRef);
console.log(ingredientsListRef);
