
$(document).ready(function () {

    let subscribed = false;

    // Subscribe to notifications
    $("#subscribe").click(function () {
        subscribed = true;
        $("#message").text("Successfully subscribed!");
    });

    // Unsubscribe from notifications
    $("#unsubscribe").click(function () {
        subscribed = false;
        $("#message").text("You have unsubscribed.");
    });

    // Attach click event to topics using on()
    $("#topics").on("click", ".topic", function () {
        if (subscribed) {
            $("#message").text("Subscribed to " + $(this).text());
        }
        else {
            $("#message").text("Please subscribe first!");
        }
    });

    // Add new topic dynamically
    $("#addTopic").click(function () {
        let topic = $("#newTopic").val();

        if (topic !== "") {
            $("#topics").append(
                '<li class="topic">' + $("<div>").text(topic).html() + '</li>'
            );
            $("#newTopic").val("");
            $("#message").text("New topic added!");
        }
    });

    // Remove last topic and detach its event handling
    $("#removeTopic").click(function () {
        let lastTopic = $("#topics .topic:last");

        if (lastTopic.length > 0) {
            lastTopic.off("click");
            lastTopic.remove();
            $("#message").text("Topic removed!");
        }
    });

});
