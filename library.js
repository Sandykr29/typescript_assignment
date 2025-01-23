// Enums for Book Genres
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["ScienceFiction"] = "Science Fiction";
    Genre["Fantasy"] = "Fantasy";
})(Genre || (Genre = {}));
// Library Implementation
var LibrarySystem = /** @class */ (function () {
    function LibrarySystem(initialInventory) {
        this.inventory = initialInventory;
    }
    // Search books by title, author, or genre
    LibrarySystem.prototype.searchBooks = function (criteria) {
        return this.inventory.filter(function (book) {
            return ((!criteria.title || book.title.includes(criteria.title)) &&
                (!criteria.author || book.author.includes(criteria.author)) &&
                (!criteria.genre || book.genre === criteria.genre));
        });
    };
    // Update the quantity of a book
    LibrarySystem.prototype.updateBookQuantity = function (id, newQuantity) {
        var book = this.inventory.find(function (b) { return b.id === id; });
        if (book) {
            book.quantity = newQuantity;
            console.log("Updated quantity for book ID ".concat(id, " to ").concat(newQuantity));
        }
        else {
            console.log("Book with ID ".concat(id, " not found."));
        }
    };
    // Display library inventory
    LibrarySystem.prototype.displayInventory = function () {
        console.log("Library Inventory:");
        this.inventory.forEach(function (book) {
            console.log("ID: ".concat(book.id, ", Title: ").concat(book.title, ", Author: ").concat(book.author, ", Genre: ").concat(book.genre, ", Format: ").concat(book.format, ", Quantity: ").concat(book.quantity));
        });
    };
    return LibrarySystem;
}());
// Initialize the library with predefined books
var library = new LibrarySystem([
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: Genre.Fiction,
        quantity: 3,
        format: "Hardcover",
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: Genre.Fiction,
        quantity: 5,
        format: "Paperback",
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: Genre.ScienceFiction,
        quantity: 4,
        format: "Ebook",
    },
    {
        id: 4,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: Genre.Mystery,
        quantity: 2,
        format: "Hardcover",
    },
]);
// Test the application
library.displayInventory();
console.log("\nSearch Results (Genre: Fiction):");
console.log(library.searchBooks({ genre: Genre.Fiction }));
console.log("\nSearch Results (Author: George Orwell):");
console.log(library.searchBooks({ author: "George Orwell" }));
library.updateBookQuantity(2, 10);
library.displayInventory();
