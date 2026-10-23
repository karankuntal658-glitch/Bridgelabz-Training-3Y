
const rules = {
    name: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).+$/
};

const messages = {
    name: "Name must contain only alphabets.",
    email: "Enter a valid email.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Password needs uppercase, number and special character."
};

function validate(id) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    const valid = rules[id].test(input.value);

    input.className = valid ? "valid" : "invalid";
    error.textContent = valid ? "" : messages[id];

    return valid;
}

const fields = ["name", "email", "phone", "password"];

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    for (let i = 0; i < fields.length; i++) {
        if (!validate(fields[i])) {
            valid = false;
        }
    }

    document.getElementById("message").textContent =
        valid ? "Registration successful!" : "Please correct the errors.";
});

for (let i = 0; i < fields.length; i++) {
    document.getElementById(fields[i]).addEventListener("input", function() {
        validate(fields[i]);
    });
}
