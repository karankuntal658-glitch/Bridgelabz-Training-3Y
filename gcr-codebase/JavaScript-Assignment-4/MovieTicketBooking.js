
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const nameValid = /^[A-Za-z ]+$/.test(name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    document.getElementById("nameError").textContent =
        nameValid ? "" : "Enter a valid name.";

    document.getElementById("emailError").textContent =
        emailValid ? "" : "Enter a valid email.";

    document.getElementById("seatsError").textContent =
        seatsValid ? "" : "Seats must be between 1 and 10.";

    const ticket = document.getElementById("ticket");

    if (nameValid && emailValid && seatsValid) {
        const booking = { name, email, seats };

        ticket.textContent =
            `Booking Successful! Name: ${booking.name}, Email: ${booking.email}, Seats: ${booking.seats}`;
    } else {
        ticket.textContent = "";
    }
});
