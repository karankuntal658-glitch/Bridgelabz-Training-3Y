
const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function(event) {
    coordinates.textContent =
        "clientX: " + event.clientX +
        ", clientY: " + event.clientY;
});

mouseBox.addEventListener("dblclick", function(event) {
    const boxPosition = mouseBox.getBoundingClientRect();

    const dot = document.createElement("div");
    dot.className = "dot";

    dot.style.left = (event.clientX - boxPosition.left) + "px";
    dot.style.top = (event.clientY - boxPosition.top) + "px";

    mouseBox.appendChild(dot);
});
