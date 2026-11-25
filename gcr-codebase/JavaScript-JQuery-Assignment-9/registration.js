
$(document).ready(function () {

    // Store registered emails for uniqueness checking
    let registeredEmails = ["test@gmail.com"];

    $("#registerForm").submit(function (event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();

        let valid = true;

        // Reset previous field styles
        $("input").css("border", "1px solid black");

        // Validate name
        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        // Validate email format
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        // Check email uniqueness
        else if (registeredEmails.includes(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
            $("#message").text("Email is already registered!");
        }

        // Validate password length
        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        // Display result
        if (valid) {
            registeredEmails.push(email);

            $("#message").css("color", "green")
                .text("Registration successful!");

            $("#registerForm")[0].reset();
        }
        else {
            $("#message").css("color", "red")
                .text("Please enter valid details.");
        }

    });

});
