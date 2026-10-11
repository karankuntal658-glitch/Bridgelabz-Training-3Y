
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;

const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let correctAnswer;

// Calculate the answer based on the selected operator.
switch (operator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;

    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;

    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;

    case "/":
        correctAnswer = firstNumber / secondNumber;
        break;
}

if (operator === "/") {
    correctAnswer = Number(correctAnswer.toFixed(2));
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
console.log(`Correct Answer: ${correctAnswer}`);
