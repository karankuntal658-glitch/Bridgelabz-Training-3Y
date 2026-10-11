
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;

// Compare the guess with the randomly generated number.
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (Math.abs(userGuess - secretNumber) <= 3 && userGuess >= 1 && userGuess <= 50) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log(`Secret Number: ${secretNumber}`);
