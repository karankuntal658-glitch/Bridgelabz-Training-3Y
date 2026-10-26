
const form = document.getElementById("registrationForm");

const fields = [
    document.getElementById("name"),
    document.getElementById("email"),
    document.getElementById("password")
];

function validateField(input) {
    const error = document.getElementById(input.id + "Error");
    let message = "";

    if (input.id === "name" && input.value.trim() === "") {
        message = "Name is required.";
    } else if (input.id === "email") {
        if (input.value.trim() === "") {
            message = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+$/.test(input.value.trim())) {
            message = "Email must contain @ and valid text.";
        }
    } else if (input.id === "password" && input.value.length < 6) {
        message = "Password must contain at least 6 characters.";
    }

    error.textContent = message;
    input.classList.toggle("invalid", message !== "");
    input.classList.toggle("valid", message === "");

    return message === "";
}

for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener("input", function() {
        validateField(fields[i]);
        document.getElementById("message").textContent = "";
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let allValid = true;

    for (let i = 0; i < fields.length; i++) {
        if (!validateField(fields[i])) {
            allValid = false;
        }
    }

    const message = document.getElementById("message");

    if (allValid) {
        message.textContent = "Form Submitted Successfully";
    } else {
        message.textContent = "";
    }
});
