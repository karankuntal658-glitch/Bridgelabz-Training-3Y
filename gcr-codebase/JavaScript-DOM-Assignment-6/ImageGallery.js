
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");
const closeButton = document.getElementById("closeButton");

gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        largeImage.src = event.target.src;
        largeImage.alt = event.target.alt;
        modal.style.display = "flex";
    }
});

modalContent.addEventListener("click", function(event) {
    event.stopPropagation();
});

modal.addEventListener("click", function() {
    modal.style.display = "none";
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});
