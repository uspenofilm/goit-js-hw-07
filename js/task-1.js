const categoriesElements = document.querySelectorAll("li.item");

const numberCategories = categoriesElements.length;

console.log(`Number of categories: ${numberCategories}`);

for (let i = 0; i < numberCategories; i++) {
  const title = categoriesElements[i].querySelector("h2");
  const categoryItems = categoriesElements[i].querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
}
