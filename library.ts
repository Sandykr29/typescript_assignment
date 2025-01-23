// Enums for Book Genres
enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Mystery = "Mystery",
    Thriller = "Thriller",
    ScienceFiction = "Science Fiction",
    Fantasy = "Fantasy",
}

// Union Type for Book Formats
type BookFormat = "Paperback" | "Hardcover" | "Ebook";

// Interface for a Book
interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    quantity: number;
}

// Intersection Type for LibraryBook
type LibraryBook = Book & { format: BookFormat };

// Interface for the Library
interface Library {
    inventory: LibraryBook[];
    searchBooks(criteria: Partial<Pick<LibraryBook, "title" | "author" | "genre">>): LibraryBook[];
    updateBookQuantity(id: number, newQuantity: number): void;
}

// Library Implementation
class LibrarySystem implements Library {
    inventory: LibraryBook[];

    constructor(initialInventory: LibraryBook[]) {
        this.inventory = initialInventory;
    }

    // Search books by title, author, or genre
    searchBooks(criteria: Partial<Pick<LibraryBook, "title" | "author" | "genre">>): LibraryBook[] {
        return this.inventory.filter((book) => {
            return (
                (!criteria.title || book.title.includes(criteria.title)) &&
                (!criteria.author || book.author.includes(criteria.author)) &&
                (!criteria.genre || book.genre === criteria.genre)
            );
        });
    }

    // Update the quantity of a book
    updateBookQuantity(id: number, newQuantity: number): void {
        const book = this.inventory.find((b) => b.id === id);
        if (book) {
            book.quantity = newQuantity;
            console.log(`Updated quantity for book ID ${id} to ${newQuantity}`);
        } else {
            console.log(`Book with ID ${id} not found.`);
        }
    }

    // Display library inventory
    displayInventory(): void {
        console.log("Library Inventory:");
        this.inventory.forEach((book) => {
            console.log(
                `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Format: ${book.format}, Quantity: ${book.quantity}`
            );
        });
    }
}

// Initialize the library with predefined books
const library = new LibrarySystem([
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
