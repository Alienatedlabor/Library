let myLibrary = [];
//constructor:
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.Book.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`;
  };
}
let modal = document.querySelector(".modal");

const newButton = document.querySelector(".new-btn");
newButton.addEventListener("click", showModal);
//function to show modal
function showModal() {
  modal.style.display = "block";
}
let closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", hideModal);
//function to hideModal
function hideModal() {
  modal.style.display = "none";
}

// stores new book objects into myLibrary array:
// function addBookToLibrary(){
//   new Book(title, author, pages, read){
//     title = document.querySelector("#author").value;
//   };
// };
