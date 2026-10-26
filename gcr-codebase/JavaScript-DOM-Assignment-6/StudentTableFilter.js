
const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("#studentTable tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    for (let i = 0; i < tableRows.length; i++) {
        const rowText = tableRows[i].textContent.toLowerCase();
        const matches = rowText.includes(searchText);

        tableRows[i].style.display = matches ? "" : "none";

        if (matches) {
            visibleCount++;
        }
    }

    noResults.textContent =
        visibleCount === 0 ? "No results found" : "";
});
