function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElement = document.querySelector(".change-color");

const bodyElement = document.querySelector("body");

const colorSpan = document.querySelector(".color");

btnElement.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  colorSpan.textContent = color;
});
