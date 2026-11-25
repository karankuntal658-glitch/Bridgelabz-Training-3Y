
$(document).ready(function () {

    // Highlight direct reports of manager
    $(".manager").click(function () {
        $(this).nextAll(".employee").addClass("highlight");
    });

    // Show contact information using next()
    $(".employee").hover(
        function () {
            $(this).children(".contact").show();
        },
        function () {
            $(this).children(".contact").hide();
        }
    );

    // Change background of department members using children()
    $(".departmentName").click(function () {
        $(this).parent().children(".employee")
            .css("background-color", "lightblue");
    });

    // Highlight sibling employees of random employee
    $("#randomEmployee").click(function () {
        let employees = $(".employee:not(.manager)");
        let random = Math.floor(Math.random() * employees.length);

        employees.removeClass("highlight");
        $(employees[random]).siblings(".employee")
            .addBack().addClass("highlight");
    });

    // Collapse or expand team using parent() and find()
    $("#toggleTeam").click(function () {
        let team = $(this).parent().find("#team");
        team.find(".department").toggle();
    });

});
