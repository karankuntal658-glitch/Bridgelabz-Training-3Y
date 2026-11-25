let employeesSection = document.getElementById("employees");

function loadEmployees() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3002/employees");

    xhr.onload = function () {

        if (xhr.status === 200) {

            let employees = JSON.parse(xhr.responseText);

            employeesSection.innerHTML = "";

            employees.forEach(function (employee) {

                employeesSection.innerHTML += `
                    <article>
                        <h3>${employee.name}</h3>
                        <p>Department: ${employee.department}</p>
                        <p>Status: ${employee.active ? "Active" : "Inactive"}</p>

                        <button data-id="${employee.id}">
                            ${employee.active ? "Deactivate" : "Activate"}
                        </button>
                    </article>
                `;

            });

        } else {
            employeesSection.innerHTML = "Failed to load employees.";
        }
    };

    xhr.onerror = function () {
        employeesSection.innerHTML = "Network error.";
    };

    xhr.send();
}

// Update employee status using PATCH
employeesSection.addEventListener("click", function (event) {

    if (event.target.tagName !== "BUTTON") {
        return;
    }

    let employeeId = event.target.dataset.id;

    let employee = event.target.previousElementSibling.previousElementSibling.textContent;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3002/employees/" + employeeId);

    xhr.onload = function () {

        if (xhr.status === 200) {

            let employeeData = JSON.parse(xhr.responseText);

            let newStatus = !employeeData.active;

            // Optimistically update the UI
            event.target.textContent = newStatus ? "Deactivate" : "Activate";
            event.target.parentElement.querySelectorAll("p")[1].textContent =
                "Status: " + (newStatus ? "Active" : "Inactive");

            let patchRequest = new XMLHttpRequest();

            patchRequest.open(
                "PATCH",
                "http://localhost:3002/employees/" + employeeId
            );

            patchRequest.setRequestHeader(
                "Content-Type",
                "application/json"
            );

            patchRequest.onload = function () {

                if (patchRequest.status !== 200) {
                    alert("Update failed. Reverting changes.");
                    loadEmployees();
                }

            };

            patchRequest.onerror = function () {
                alert("Network error. Reverting changes.");
                loadEmployees();
            };

            patchRequest.send(JSON.stringify({
                active: newStatus
            }));

        }

    };

    xhr.send();

});

loadEmployees();