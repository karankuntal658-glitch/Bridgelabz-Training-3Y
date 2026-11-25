$(document).ready(function () {

    function loadTasks() {

        let priority = $("#priority").val();
        let completed = $("#completed").val();

        let url = "http://localhost:3003/tasks";

        let filters = {};

        if (priority !== "") {
            filters.priority = priority;
        }

        if (completed !== "") {
            filters.completed = completed;
        }

        // GET tasks with selected filters
        $.ajax({
            url: url,
            method: "GET",
            data: filters,

            success: function (tasks) {

                $("#tasks").empty();

                if (tasks.length === 0) {
                    $("#tasks").html("<p>No tasks found.</p>");
                    return;
                }

                tasks.forEach(function (task) {

                    $("#tasks").append(`
                        <article>
                            <h3>${task.title}</h3>
                            <p>Priority: ${task.priority}</p>

                            <label>
                                <input type="checkbox"
                                    class="task-check"
                                    data-id="${task.id}"
                                    ${task.completed ? "checked" : ""}>
                                Completed
                            </label>
                        </article>
                    `);

                });

            },

            error: function () {
                $("#tasks").html("<p>Error loading tasks.</p>");
            }
        });

    }

    // Reload tasks whenever filters change
    $("#priority, #completed").on("change", loadTasks);

    // PATCH task completion status
    $("#tasks").on("change", ".task-check", function () {

        let taskId = $(this).data("id");
        let isCompleted = $(this).is(":checked");

        $.ajax({
            url: "http://localhost:3003/tasks/" + taskId,
            method: "PATCH",
            contentType: "application/json",

            data: JSON.stringify({
                completed: isCompleted
            }),

            success: function () {
                loadTasks();
            },

            error: function () {
                alert("Unable to update task.");
                loadTasks();
            }
        });

    });

    loadTasks();

});