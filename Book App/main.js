const title = document.querySelector('.title')
const author = document.querySelector('.author')
const pages = document.querySelector('.pages')
const read = document.querySelector('.read')
const button = document.querySelector('.button')
const addedBooks = document.querySelector('.addedBooks')

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author =  author;
    this.pages = pages;
    this.read = read;
}

button.addEventListener('click', addBookToLibrary )

function addBookToLibrary() {
    const newBook = new Book (title.value, author.value, pages.value, read.value)
    myLibrary.push(newBook)
    console.table(myLibrary)
    addedBooks.append(newBook)
}














