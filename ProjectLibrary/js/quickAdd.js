const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const submitBtn = document.querySelector("button[type='submit']");

const titleInput = document.getElementById("bookTitle");
const authorInput = document.getElementById("bookAuthor");
const genreSelector = document.getElementById("bookGenre");
const isbnInput = document.getElementById("ISBN");
const pageNum = document.getElementById("pageNum");

let title = titleInput;
let author = authorInput;
let genre = genreSelector;
let isbn = isbnInput;
let numOfPages = pageNum;

function clearInputFields(title, author, genre, isbn, numOfPages) {
    // Clear the value of each input field directly
    title.value = "";
    author.value = "";
    genre.value = "";
    isbn.value = "";
    numOfPages.value = "";
}

// Submit button captures the form data
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    console.log(fd);
    clearInputFields(title, author, genre, isbn, numOfPages);
});