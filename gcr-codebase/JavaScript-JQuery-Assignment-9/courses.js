
$(document).ready(function () {

    // Filter courses whenever user types
    $("#search").keyup(function () {

        let value = $(this).val().toLowerCase();
        let count = 0;

        $(".course").each(function () {

            let courseName = $(this).text();

            if (courseName.toLowerCase().includes(value)) {

                // Show matching courses
                $(this).show();
                count++;

                // Highlight matched course text
                $(this).css("background-color", "yellow");

            }
            else {
                // Hide courses that do not match
                $(this).hide();
                $(this).css("background-color", "white");
            }

        });

        // Update matching course count
        $("#count").text("Matched Courses: " + count);

    });

    // Clear search and reset all courses
    $("#clearSearch").click(function () {

        $("#search").val("");
        $(".course").show();
        $(".course").css("background-color", "white");

        $("#count").text("Total Courses: " + $(".course").length);

    });

});
