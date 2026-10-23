
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function displayUser() {
    document.getElementById("output").textContent =
        JSON.stringify(user, null, 2);
}

displayUser();

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);

    displayUser();
});
