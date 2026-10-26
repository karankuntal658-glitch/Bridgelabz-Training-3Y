
const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maxCharacters = 100;

function updateCounter() {
    const remaining = maxCharacters - textInput.value.length;

    counter.textContent = remaining + " characters remaining";
    counter.className = "";

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    } else if (remaining === 0) {
        counter.classList.add("danger");
    }
}

textInput.addEventListener("beforeinput", function(event) {
    if (event.inputType.startsWith("insert") &&
        textInput.value.length >= maxCharacters) {
        event.preventDefault();
    }
});

textInput.addEventListener("input", updateCounter);

resetButton.addEventListener("click", function() {
    textInput.value = "";
    updateCounter();
});
