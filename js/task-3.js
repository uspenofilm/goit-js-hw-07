const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
    return;
  }
  nameOutput.textContent = nameInput.value.trim();
});
