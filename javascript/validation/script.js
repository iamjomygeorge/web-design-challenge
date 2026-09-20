const inputEmail = document.querySelector("#email");
inputEmail.addEventListener("input", validator);

const inputPassword = document.querySelector("#password");
inputPassword.addEventListener("input", validator);

function validator(event) {
    document.querySelector("#show-error").textContent = event.target.checkValidity();
    document.querySelector("#show-error").textContent = event.target.checkValidity();
}
