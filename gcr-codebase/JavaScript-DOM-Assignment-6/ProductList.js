
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct(name) {
    if (name.trim() === "") return;

    const item = document.createElement("li");
    item.innerHTML = `
        <span class="productName"></span>
        <button data-action="edit">Edit</button>
        <button data-action="delete">Delete</button>
    `;

    item.querySelector(".productName").textContent = name.trim();
    productList.appendChild(item);
}

addButton.addEventListener("click", function() {
    addProduct(productInput.value);
    productInput.value = "";
});

function saveEdit(item) {
    const input = item.querySelector(".editInput");

    if (!input) return;

    const span = document.createElement("span");
    span.className = "productName";
    span.textContent = input.value.trim() || "Unnamed Product";

    input.replaceWith(span);
}

productList.addEventListener("click", function(event) {
    const button = event.target.closest("button");
    if (!button) return;

    const item = button.closest("li");

    if (button.dataset.action === "delete") {
        item.remove();
    }

    if (button.dataset.action === "edit") {
        if (item.querySelector(".editInput")) return;

        const span = item.querySelector(".productName");
        const input = document.createElement("input");

        input.className = "editInput";
        input.value = span.textContent;
        span.replaceWith(input);
        input.focus();
    }
});

// Save an edited product when clicking outside its list item.
document.addEventListener("click", function(event) {
    const editingItem = productList.querySelector("li:has(.editInput)");

    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit(editingItem);
    }
});
