const form = document.getElementById("form")
const email = document.getElementById("email").value
const errorMessage = document.getElementById("errorMessage")

form.addEventListener('submit', e=> {
    let regex = /^[a-z0-9_]+@[^ ]+\.[a-z]{2,3}$/;

    

    if (email.match(regex)) {
        errorMessage.innerText = ""
    }else {
        // e.preventDefault()
        errorMessage.innerText = "Please enter a valid email address"
    }
})