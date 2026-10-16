
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];

    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot find real square root of a negative number");
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError("Operation not recognized");
        }

        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ERROR - ${error.name}: ${error.message}`);
    }
}

try {
    const operation = "multiply";

    switch (operation) {
        case "add":
            console.log(num1 + num2);
            break;
        default:
            throw new InvalidOperationError("Operation not recognized");
    }
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
