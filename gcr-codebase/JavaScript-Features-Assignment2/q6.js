
"use strict";

const input = Number(process.argv[2] ?? 5);
const rows = Number.isInteger(input) && input > 0 ? input : 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";

    }

    console.log(pattern.trimEnd());
}
