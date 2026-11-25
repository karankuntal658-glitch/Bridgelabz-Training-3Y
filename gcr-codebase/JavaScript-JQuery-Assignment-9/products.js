
$(document).ready(function () {

    // Highlight product when clicked
    $(".product").click(function () {
        $(this).addClass("highlight");

        // Check stock using data attribute
        if ($(this).attr("data-stock") === "no") {
            alert("This product is out of stock!");
        }
    });

    // Show product details on hover
    $(".product").hover(
        function () {
            $(this).find(".details").show();
        },
        function () {
            $(this).find(".details").hide();
        }
    );

    // Toggle favorite selection
    $(".favorite").click(function (event) {
        event.stopPropagation();
        $(this).toggleClass("selected");
    });

});
