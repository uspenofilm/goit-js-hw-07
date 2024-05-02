const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  if (
    loginForm.elements.email.value === "" ||
    loginForm.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
    return;
  }
  const result = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim(),
  };
  console.log(result);
  loginForm.reset();
  event.preventDefault();
});
