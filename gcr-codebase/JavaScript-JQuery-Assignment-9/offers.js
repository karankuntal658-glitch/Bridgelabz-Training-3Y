
$(document).ready(function () {

    // Hide first banner
    $("#hideBanner").click(function () {
        $(".banner:first").hide();
    });

    // Show all banners
    $("#showBanner").click(function () {
        $(".banner").show();
    });

    // Slide banners up
    $("#slideUp").click(function () {
        $(".banner").slideUp();
    });

    // Slide banners down
    $("#slideDown").click(function () {
        $(".banner").slideDown();
    });

    // Fade out all banners
    $("#fadeOut").click(function () {
        $(".banner").fadeOut();
    });

    // Fade in all banners
    $("#fadeIn").click(function () {
        $(".banner").fadeIn();
    });

    // Automatically rotate through banners every 5 seconds
    let current = 0;
    let banners = $(".banner");

    function rotateBanner() {
        banners.hide();
        $(banners[current]).fadeIn();

        current = (current + 1) % banners.length;
    }

    banners.hide();
    rotateBanner();

    setInterval(rotateBanner, 5000);

});
