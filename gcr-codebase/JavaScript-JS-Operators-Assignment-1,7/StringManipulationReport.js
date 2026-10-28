
let name = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
name = name.trim().toLowerCase();

// Capitalize the first letter of each word
name = name.split(" ");

name = name.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
);

name = name.join(" ");

// Replace Pro with Pro Edition
name = name.replace("Pro", "Pro Edition");

console.log("Product Name:", name);
console.log("Length:", name.length);
