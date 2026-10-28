
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let words = feedback.trim().split(/\s+/);
console.log("Word Count:", words.length);

// Check for negative feedback
feedback = feedback.toLowerCase();

if (feedback.includes("bad") || feedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
