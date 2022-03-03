
const form = document.getElementById("form");

form.addEventListener("submit", formValidation);

function formValidation(event) {
    event.preventDefault();

    const email =document.getElementById('email');
    const errMessage = document.getElementById("errorMessage")
    const isValid = validateEmail(email.value);

    if (!isValid) {
        errMessage.classList.add("active-error-alert");
        return;
    } else {
        errMessage.classList.remove("active-error-alert");
    }

    email.value = "";
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
