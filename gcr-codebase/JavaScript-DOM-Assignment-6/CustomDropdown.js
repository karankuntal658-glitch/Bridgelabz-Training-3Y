
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

dropdownButton.addEventListener("click", function(event) {
    event.stopPropagation();
    options.classList.toggle("hidden");
});

options.addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
        dropdownButton.textContent = event.target.textContent;
        options.classList.add("hidden");
    }
});

// Capturing phase makes the outside-click handler run
// before the event reaches the target element.
document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
        options.classList.add("hidden");
    }
}, true);
