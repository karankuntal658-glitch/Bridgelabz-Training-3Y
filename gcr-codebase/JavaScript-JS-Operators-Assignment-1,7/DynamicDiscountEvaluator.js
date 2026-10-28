
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

// Apply category-wise discounts
for (let i = 0; i < cart.length; i++) {
    let price = cart[i].price;

    if (cart[i].category == "electronics") {
        price = price - (price * 10 / 100);
    } else if (cart[i].category == "fashion") {
        price = price - (price * 5 / 100);
    }

    total = total + price;

    console.log(cart[i].item + " Price:", price);
}

// Calculate original total
let oldTotal = cart.reduce((sum, item) => sum + item.price, 0);

// Apply extra discount if total is above 50000
if (total > 50000) {
    total = total - (total * 5 / 100);
}

console.log("Original Total:", oldTotal);
console.log("Final Total:", total);
