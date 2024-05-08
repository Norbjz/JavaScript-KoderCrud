let logInBtn = document.getElementById("log-in-btn");

logInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.open("../views/login.html", "_self");
});

let loggedUser = localStorage.getItem("token");
console.log(loggedUser);

let userBtns = document.getElementById("user-login");
let registerBtns = document.getElementById("register-btns");
console.log(registerBtns);

if (loggedUser) {
  userBtns.classList.remove("d-none");
  registerBtns.classList.add("d-none");
} else {
  userBtns.classList.add("d-none");
  registerBtns.classList.remove("d-none");
}
