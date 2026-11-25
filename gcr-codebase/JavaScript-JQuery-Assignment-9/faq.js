
$(document).ready(function () {

    // Click question to show or hide its answer
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // Change question color on hover
    $(".question").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "black");
        }
    );

    // Double click to close all answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // Highlight parent question when input gets focus
    $(".answer").on("focus", "input", function () {
        $(this).closest(".faq").find(".question")
            .css("background-color", "lightyellow");
    });

    // Reset background when input loses focus
    $(".answer input").blur(function () {
        $(this).closest(".faq").find(".question")
            .css("background-color", "white");
    });

});
