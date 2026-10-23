
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log("Book is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " returned successfully.");
    }
}

const books = [
    new Book("Java Basics", "James", "101"),
    new Book("Web Development", "John", "102"),
    new Book("Python Guide", "Smith", "103")
];

console.log("Available Books:");

for (let i = 0; i < books.length; i++) {
    if (!books[i].isIssued) {
        console.log(books[i].title + " " + books[i].ISBN);
    }
}

const searchISBN = "102";
let found = false;

for (let i = 0; i < books.length; i++) {
    if (books[i].ISBN === searchISBN) {
        books[i].issueBook();
        found = true;
        break;
    }
}

if (!found) {
    console.log("Book not found.");
}
