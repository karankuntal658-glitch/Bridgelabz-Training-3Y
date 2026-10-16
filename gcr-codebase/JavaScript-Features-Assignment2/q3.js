
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            throw new Error("NullTransactionError");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MissingPropertyError");
        }

        if (transaction.amount < 0) {
            throw new Error("NegativeAmountError");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);
    } catch (error) {
        invalid.push({
            index: i + 1,
            reason: error.message
        });

        console.log(`Transaction ${i + 1}: ${error.message}`);
    }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);
