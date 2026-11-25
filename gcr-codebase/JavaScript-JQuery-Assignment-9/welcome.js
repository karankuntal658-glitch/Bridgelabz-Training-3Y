
$(document).ready(function () {

    // Display greeting according to current time
    let hour = new Date().getHours();

    if (hour < 12) {
        $("#greeting").text("Good Morning!");
    }
    else if (hour < 17) {
        $("#greeting").text("Good Afternoon!");
    }
    else {
        $("#greeting").text("Good Evening!");
    }

    // Change greeting into motivational quote
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself and keep growing!");
    });

    // Show or hide welcome message
    $("#toggleMessage").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Display alert when greeting is clicked
    $("#greetingAlert").click(function () {
        alert("Welcome to our website!");
    });

});
