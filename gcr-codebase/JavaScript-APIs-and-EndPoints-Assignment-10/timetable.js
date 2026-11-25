let daySelect = document.getElementById("day");
let classesSection = document.getElementById("classes");

function loadTimetable() {

    let selectedDay = daySelect.value;

    classesSection.innerHTML = "Loading timetable...";

    // Fetch timetable for selected day
    fetch("http://localhost:3005/timetable?day=" + selectedDay)

        .then(function (response) {

            if (!response.ok) {
                throw new Error("Failed to load timetable");
            }

            return response.json();

        })

        .then(function (classes) {

            classesSection.innerHTML = "";

            if (classes.length === 0) {
                classesSection.innerHTML =
                    "<p>No classes scheduled for this day.</p>";
                return;
            }

            classes.forEach(function (item) {

                classesSection.innerHTML += `
                    <article>
                        <h3>${item.subject}</h3>
                        <p>Time: ${item.time}</p>
                        <p>Room: ${item.room}</p>
                    </article>
                `;

            });

        })

        .catch(function () {
            classesSection.innerHTML =
                "<p>Error loading timetable.</p>";
        });

}

// Load timetable when the day changes
daySelect.addEventListener("change", loadTimetable);

loadTimetable();