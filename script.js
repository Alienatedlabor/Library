let myLibrary = [];
//constructor:
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.Book.info = function() {
   return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`;
  };
};
//stores new book objects into myLibrary array: 
function addBookToLibrary(){
  new Book();
};