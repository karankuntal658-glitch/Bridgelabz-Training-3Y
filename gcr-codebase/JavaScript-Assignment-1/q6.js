
const originalTotal = 7500;

let discountPercentage = 0;

if (originalTotal >= 10000) {
    discountPercentage = 25;
} else if (originalTotal >= 5000) {
    discountPercentage = 15;
} else if (originalTotal >= 2000) {
    discountPercentage = 5;
}

const discountAmount = Math.round(originalTotal * discountPercentage / 100);
const finalPrice = Math.round(originalTotal - discountAmount);

console.log(`Original Total: ₹${originalTotal}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${discountAmount}`);
console.log(`Final Price: ₹${finalPrice}`);
