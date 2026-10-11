
const userName = "Karan";
const age = 20;
const isStudent = true;
const subjects = ["Java", "HTML", "CSS"];
const address = { city: "Meerut", country: "India" };
const phoneNumber = null;
let email;

const report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Address", Value: address, Type: typeof address },
    { Label: "Phone Number", Value: phoneNumber, Type: "null" },
    { Label: "Email", Value: email, Type: typeof email }
];

// Display all data in one table.
console.table(report);
