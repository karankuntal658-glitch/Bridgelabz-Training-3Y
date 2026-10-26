
const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const error = document.getElementById("error");
const summary = document.getElementById("summary");
const form = document.getElementById("registrationForm");

let currentStep = 0;

function showStep() {
    for (let i = 0; i < steps.length; i++) {
        steps[i].classList.toggle("active", i === currentStep);
    }

    backButton.style.display = currentStep === 0 ? "none" : "inline";
    nextButton.textContent =
        currentStep === steps.length - 1 ? "Submit" : "Next";
}

nextButton.addEventListener("click", function() {
    const input = steps[currentStep].querySelector("input");

    if (!input.checkValidity()) {
        input.reportValidity();
        return;
    }

    if (currentStep < steps.length - 1) {
        currentStep++;
        error.textContent = "";
        showStep();
    } else {
        summary.textContent =
            "Name: " + document.getElementById("name").value +
            " | Email: " + document.getElementById("email").value +
            " | Password: " + document.getElementById("password").value;

        form.style.display = "none";
        summary.textContent = "Registration completed successfully! " +
            summary.textContent;
    }
});

backButton.addEventListener("click", function() {
    if (currentStep > 0) {
        currentStep--;
        error.textContent = "";
        showStep();
    }
});

showStep();
