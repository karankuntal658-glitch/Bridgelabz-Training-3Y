
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const record = JSON.parse(rawData[i]);

        if (record.user === undefined || record.age === undefined) {
            throw new Error("Missing user or age");
        }

        const age = Number(record.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        const cleanRecord = {
            user: record.user,
            age: age
        };

        cleanData.push(cleanRecord);

        if (age < 18) {
            under18.push(cleanRecord);
        }

        console.log(`Line ${i + 1}: Valid JSON record`);
    } catch (error) {
        errors.push({
            line: i + 1,
            reason: error.message
        });

        console.log(`Line ${i + 1}: ERROR - ${error.message}`);
    }
}

console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Under-18 users:", under18);
console.log("Valid count:", cleanData.length);
console.log("Error count:", errors.length);
