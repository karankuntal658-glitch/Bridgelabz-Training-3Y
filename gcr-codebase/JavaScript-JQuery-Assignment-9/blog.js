
$(document).ready(function () {

    let postCount = 5;

    // Append a new post at the end
    $("#addPost").click(function () {
        postCount++;

        $("#posts").append(
            '<div class="post"><h3>New Blog Post ' +
            postCount + '</h3><p>New blog content.</p></div>'
        );
    });

    // Add featured post at the beginning
    $("#featuredPost").click(function () {
        $("#posts").prepend(
            '<div class="post"><h3>Featured Post</h3><p>Special featured content.</p></div>'
        );
    });

    // Remove last post
    $("#removePost").click(function () {
        $("#posts .post:last").remove();
    });

    // Add tag before and after posts
    $("#addTag").click(function () {
        $(".post:first").before('<p class="tag">New Tag Before</p>');
        $(".post:last").after('<p class="tag">New Tag After</p>');
    });

    // Highlight posts containing specific keywords
    $("#highlightPost").click(function () {
        $(".post").each(function () {

            if ($(this).text().toLowerCase().includes("javascript")) {
                $(this).addClass("highlight");
            }

        });
    });

});
