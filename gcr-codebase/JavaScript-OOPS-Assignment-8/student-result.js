
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        let average = total / this.marks.length;

        return average;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        } else if (average >= 60) {
            return "B";
        } else if (average >= 40) {
            return "C";
        } else {
            return "F";
        }
    }
}

let student1 = new Student("Rahul", [85, 90, 80]);
let student2 = new Student("Aman", [65, 70, 60]);
let student3 = new Student("Rohit", [30, 35, 25]);

let students = [student1, student2, student3];

students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("----------------");
});
