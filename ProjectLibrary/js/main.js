const myLibrary = [];

function (params) {
    for (const book of myLibrary) {

    }
}

function addBookToLibrary() {

}

function Book(title, author, genre, yearPublished, ISBN, publisher, language, edition, format, location, tags, summary, coverImageURL, rating, availabilityStatus, digitalVersionURL, seriesInfo) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.yearPublished = yearPublished;
    this.ISBN = ISBN;

    /* 
    The International Standard Book Number (ISBN) format is 13 digits long, with each digit separated by a hyphen or space
    Prefix: The first three digits, which are always either 978 or 979 
    Registration group: The next one to five digits, which identify the country, region, or language where the book was registered 
    Registrant: The next up to seven digits, which identify the publisher or imprint 
    Publication: The next up to six digits, which identify the edition and format of the book 
    Check digit: The final digit, which is calculated using a mathematical formula to validate the other digits
    
    */

    this.publisher = publisher;
    this.language = language;
    this.edition = edition;
    this.format = format;
    this.location = location;
    this.tags = tags || []; // Default to empty array
    this.summary = summary;
    this.coverImageURL = coverImageURL;
    this.rating = rating || 0; // Default rating is 0
    this.availabilityStatus = availabilityStatus || "Available";
    this.digitalVersionURL = digitalVersionURL;
    this.seriesInfo = seriesInfo || null; // If part of a series

    this.borrowerHistory = []; // Stores past borrowers
    this.dueDate = null; // If checked out

    // Method to display book details
    this.getDetails = function () {
        return `${this.title} by ${this.author}, Genre: ${this.genre}, Published: ${this.yearPublished}, ISBN: ${this.ISBN}, Edition: ${this.edition}, Format: ${this.format}, Location: ${this.location}, Availability: ${this.availabilityStatus}`;
    };
}