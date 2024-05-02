function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.querySelector("#controls");
const divBoxes = document.querySelector("#boxes");
const inputNumber = divControls.querySelector("input");
const createButton = divControls.querySelector("button[data-create]");
const destroyButton = divControls.querySelector("button[data-destroy]");

createButton.addEventListener("click", (event) => {
  if (inputNumber.valueAsNumber >= 1 && inputNumber.valueAsNumber <= 100) {
    destroyBoxes();
    createBoxes(inputNumber.valueAsNumber);
    inputNumber.value = "";
  }
});

function createBoxes(amount) {
  const divArray = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    const divSize = 30 + i * 10;
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divArray.push(newDiv);
  }
  divBoxes.append(...divArray);
}

destroyButton.addEventListener("click", (event) => {
  destroyBoxes();
});

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
