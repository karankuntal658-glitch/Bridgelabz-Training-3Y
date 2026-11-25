let registrationForm = document.getElementById("registrationForm");
let message = document.getElementById("message");

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    // Check name before sending the request
    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    message.textContent = "Checking email...";

    // Check whether the email already exists
    axios.get("http://localhost:3006/users", {
        params: {
            email: email
        }
    })

    .then(function (response) {

        if (response.data.length > 0) {

            message.textContent = "Email already registered!";
            return;

        }

        // POST request if email is unique
        return axios.post("http://localhost:3006/users", {
            name: name,
            email: email,
            password: password
        });

    })

    .then(function (response) {

        if (response) {

            message.textContent = "Registration successful!";

            registrationForm.reset();

        }

    })

    .catch(function () {

        message.textContent =
            "Error during registration. Please try again.";

    });

});