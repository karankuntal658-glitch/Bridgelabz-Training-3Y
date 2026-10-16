
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    if (value === null || value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        Number.isNaN(numberValue)) {
        invalidNumbers.push(value);
        console.log("Invalid:", stringValue, "| Number:", numberValue);
    } else {
        validNumbers.push(numberValue);
    }

    console.log(
        "Original:", value,
        "| Number:", numberValue,
        "| Boolean:", booleanValue,
        "| String:", stringValue
    );
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);
