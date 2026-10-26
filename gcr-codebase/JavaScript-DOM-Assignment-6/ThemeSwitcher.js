
const buttons = document.querySelectorAll("button[data-theme]");

function changeTheme(theme) {
    document.body.classList.remove(
        "light-theme",
        "dark-theme",
        "blue-theme"
    );

    document.body.classList.add(theme + "-theme");

    document.body.setAttribute("data-theme", theme);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        changeTheme(buttons[i].getAttribute("data-theme"));
    });
}

changeTheme(document.body.getAttribute("data-theme"));
