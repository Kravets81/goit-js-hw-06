const allItems = document.querySelectorAll(".item");
console.log(`В списке ${allItems.length} категории.`);

const allCategories = document.querySelectorAll("#categories>li");
allCategories.forEach((element) => {
  console.log(
    `Категория: ${element.firstElementChild.textContent}, Количество элементов: ${element.lastElementChild.children.length}`
  );
});
