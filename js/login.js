function showError(input, message) {
  const msg = input.parentNode.querySelector(`small`);
  if (input.name == email) {
    msg.innerText = message;
  } else {
    msg.innerText = input.name + " " + message;
  }
  msg.style.color = "red";
}

function showWarning(input) {
  const warning = input.parentNode.querySelector(`span`);
  input.placeholder = "";
  input.style.borderColor = "red";
  warning.style.display = "block";
}

function verifyValue(input, message) {
  if (input.value == "") {
    showWarning(input);
    showError(input, message);
  }
}

const form = document.getElementById("login-form");

const EMPTY_ERROR = "cannot be empty";
const INVALID_EMAIL_ERROR = "Looks like this is not an email";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  verifyValue(document.getElementById("first-name"), EMPTY_ERROR);
  verifyValue(document.getElementById("last-name"), EMPTY_ERROR);
  verifyValue(document.getElementById("email"), INVALID_EMAIL_ERROR);
  verifyValue(document.getElementById("password"), EMPTY_ERROR);
});
