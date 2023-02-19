const numberOfCategories = document.querySelector("#categories");
console.log(`Number of categories: ${numberOfCategories.children.length}`);

const allItems = document.querySelectorAll(".item");
allItems.forEach((item) => {
  let itemTitle = item.querySelector("h2").textContent;

  let amountOfElement = item.querySelectorAll("li").length;
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${amountOfElement}`);
});
