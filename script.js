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
//first listener prevents button from attempting to submit form (avoiding page refresh)
let submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => e.preventDefault());
submit.addEventListener('click', addBookToLibrary);
submit.addEventListener('click', resetLibrary);
submit.addEventListener('click', displayLibrary);
submit.addEventListener('click', resetForm);
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
}

//loops through objects, creates and appends card, loops through key value pairs on each object, creates text divs
//replaces array commas with colons, removes old key value pair for new formatted pairs
container = document.querySelector('.library-container');
function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    container.append(card);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove book from library';
    removeButton.classList.add('remove-button');
    card.append(removeButton);
    const switchReadButton = document.createElement('button');
    switchReadButton.classList.add('switch-button');
    // switchButton(switchReadButton);
    card.append(switchReadButton);
    let pairs = Object.entries(myLibrary[i]);
    for (let j = 0; j < pairs.length; j++) {
      let pairBox = document.createElement('div');
      pairBox.classList.add('pairbox');
      card.append(pairBox);
      pairBox.append(pairs[j]);
      let formattedPairs = pairBox.innerText.replace(/([,])+/, ': ');
      let newPairBox = document.createElement('div');
      newPairBox.classList.add('pairbox');
      card.append(newPairBox);
      newPairBox.append(formattedPairs);
      pairBox.remove();
    }
  }
}
function resetLibrary() {
  let cards = document.querySelectorAll('.card');
  cards.forEach((card) => card.parentNode.removeChild(card));
}
//TO DO:
//add functionality to remove card button
//do something with read/unread and add read/unread button?

//Book.read boolean behaving strangely, function doesn't work.
// function switchButton(switchReadButton) {
//   console.log(read);
//   if ((read = false)) {
//     switchReadButton.innerText = 'Mark Read';
//switchReadButton.addEventListener                       where event listener changes read boolean to true on click
//   }
//   if ((read = true)) {
//     switchReadButton.innerText = 'Mark Unread';
//switchReadButton.addEventListener                       where event listener changes read boolean to false on click
//   }
// }
