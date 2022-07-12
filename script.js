let myLibrary = [];
//constructor:
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let modal = document.querySelector('.modal');

const newButton = document.querySelector('.new-btn');
newButton.addEventListener('click', showModal);
//function to show modal
function showModal() {
  modal.style.display = 'block';
}
let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', hideModal);
//function to hideModal
function hideModal() {
  resetForm();
  modal.style.display = 'none';
}
let myForm = document.getElementById('form');
function resetForm() {
  myForm.reset();
}

//listeners for submit button
//first prevents button from attempting to submit form (avoiding page refresh)
let submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => e.preventDefault());
submit.addEventListener('click', addBookToLibrary);
submit.addEventListener('click', resetForm());
submit.addEventListener('click', hideModal);
// stores new book objects into myLibrary array using values taken from modal form:
function addBookToLibrary() {
  title = document.querySelector('#title').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
  if (document.getElementById('read').checked) {
    read = true;
  } else read = false;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
}
