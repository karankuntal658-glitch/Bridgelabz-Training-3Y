
let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];

function calculateBill(orderItems) {
    let prices = orderItems.map(item => {
        let food = menu.find(food => food.name === item);

        if (!food) {
            throw new Error(item + " is not available in the menu");
        }

        return food.price;
    });

    let total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

try {
    let order = ["Pizza", "Burger", "Pasta"];

    console.log("Total Bill:", calculateBill(order));
} catch (error) {
    console.log("Order Error:", error.message);
}

try {
    let order = ["Pizza", "Momos"];

    console.log("Total Bill:", calculateBill(order));
} catch (error) {
    console.log("Order Error:", error.message);
}
