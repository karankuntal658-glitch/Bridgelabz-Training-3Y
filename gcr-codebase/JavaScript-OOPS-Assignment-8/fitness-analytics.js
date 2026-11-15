
class FitnessAnalytics {
    constructor(workoutData) {
        if (!workoutData || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty");
        }

        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        let total = this.workoutData.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);

        return total / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map(user => {
            return user.user + " walked " + user.steps +
                " steps and burned " + user.calories + " calories.";
        });
    }
}

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:", fitness.getActiveUsers());

    console.log("Average Calories:", fitness.getAverageCalories());

    console.log("User Summary:", fitness.getUserSummary());

} catch (error) {
    console.log("Fitness Error:", error.message);
}
