
// Version 1 handles carousel and active widgets
firstJQuery(document).ready(function () {

    let slideNumber = 1;

    // Rotate carousel slides
    setInterval(function () {
        slideNumber++;

        if (slideNumber > 5) {
            slideNumber = 1;
        }

        firstJQuery("#slide").text("Slide " + slideNumber);

    }, 2000);

    // Highlight active widget
    firstJQuery(".widget").click(function () {
        firstJQuery(".widget").removeClass("active");
        firstJQuery(this).addClass("active");
    });

});

// Version 2 handles modal and tooltips
jQuery(document).ready(function ($) {

    // Open notification modal
    $("#showModal").click(function () {
        $("#modal").fadeIn();
    });

    // Close modal
    $("#closeModal").click(function () {
        $("#modal").fadeOut();
    });

    // Show tooltip on hover
    $(".widget").hover(
        function () {
            $(this).attr("title", "This is a dashboard widget");
        }
    );

});
