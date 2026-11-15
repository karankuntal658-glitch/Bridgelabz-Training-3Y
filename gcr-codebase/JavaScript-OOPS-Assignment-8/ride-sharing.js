
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance provided");
        }

        let fare = this.distance * 15;
        return fare;
    }
}

let driver = new Driver("Rahul", 4.8, "Car");

console.log("Driver:", driver.name);
console.log("Rating:", driver.rating);
console.log("Vehicle:", driver.vehicle);

try {
    let trip1 = new Trip("Delhi", "Meerut", 70);

    console.log("Fare:", trip1.calculateFare());

    let trip2 = new Trip("Delhi", "Noida", -10);

    console.log("Fare:", trip2.calculateFare());
} catch (error) {
    console.log("Trip Error:", error.message);
}
