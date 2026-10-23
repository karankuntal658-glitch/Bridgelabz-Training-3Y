
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let valid = true;

    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (username.length < 5) {
        document.getElementById("usernameError").textContent =
            "Username must contain at least 5 characters.";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        valid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Include an uppercase letter.";
        valid = false;
    } else if (!/[a-z]/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Include a lowercase letter.";
        valid = false;
    } else if (!/[0-9]/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Include a number.";
        valid = false;
    } else if (!/[^A-Za-z0-9\s]/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Include a special character.";
        valid = false;
    }

    document.getElementById("message").textContent =
        valid ? "Login validation successful!" : "Please correct the errors.";
});
