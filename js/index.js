var loginBox   = document.querySelector("#loginBox");
var signBox    = document.querySelector("#signBox");
var goToSignUp = document.querySelector("#goToSignUp");
var goToLogin  = document.querySelector("#goToLogin");

var loginEmail    = document.querySelector("#loginEmail");
var loginPassword = document.querySelector("#loginPassword");
var signName      = document.querySelector("#signName");
var signEmail     = document.querySelector("#signEmail");
var signPassword  = document.querySelector("#signPassword");

signBox.classList.add("d-none");

goToSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  loginBox.classList.add("d-none");
  signBox.classList.remove("d-none");
});

goToLogin.addEventListener("click", function (e) {
  e.preventDefault();
  signBox.classList.add("d-none");
  loginBox.classList.remove("d-none");
});

var inputs = [];

function addObj() {
  var obj = {
    loginEmail: loginEmail.value,
    loginPassword: loginPassword.value,
    signName: signName.value,
    signEmail: signEmail.value,
    signPassword: signPassword.value
  };

  inputs.push(obj);
  localStorage.setItem("inputs", JSON.stringify(inputs));
  console.log(obj);

  clearForm();
}

function clearForm() {
  loginEmail.value = "";
  loginPassword.value = "";
  signName.value = "";
  signEmail.value = "";
  signPassword.value = "";
}

function validateInputs(element) {
  var regex = {
    loginEmail: /[^@\s]+@[^@\s]+\.[^@\s]+/,
    loginPassword: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/,
    signName: /^[a-zA-Z0-9_-]{3,15}$/,
    signEmail: /[^@\s]+@[^@\s]+\.[^@\s]+/,
    signPassword: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/
  };

  var pattern = regex[element.id];
  if (!pattern) return;

  if (element.value === "") {
    element.classList.remove("is-valid", "is-invalid");
    return;
  }

  if (pattern.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}
