/*
  Writing the same programming code as in app.js, but using ES6 classes instead
*/

//Book class
class Book {
  constructor(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class
class UI {
  addBookToList(book){
    //grab the table body
    const list = document.querySelector('tbody');
    //create a row element
    const row = document.createElement('tr');
    //add child element data to the row element
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a class="delete" href="#">X</a></td>
    `;
    //appending the row to the list
    list.appendChild(row);
  }
  clearFields(){
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="isbn"]').value = '';
  }
  alertMsg(message,status){
    const parentElement = document.querySelector('.container'); //parentElement
    const list = document.querySelector('#book-list'); //grabbing element to insert before this
    const alertBox = document.createElement('div');
    alertBox.className = `${status} u-full-width`;
    alertBox.appendChild(document.createTextNode(message));
    parentElement.insertBefore(alertBox,list);
    setTimeout(function(){document.querySelector(`.${status}`).remove()},1500);
  }
  removeBook(target){
    target.parentElement.parentElement.remove();
  }
}

//Local Storage class ; Storing the values
//Going to be using static methods ; no instance of store
class Store {
  static getBooks(){
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
      console.log('hello world from LS');
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks(){
    const books = Store.getBooks();
    const ui = new UI();
    books.forEach(function(book){
      ui.addBookToList(book);
    });
  }
  static addBook(book){
    let books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }
  static removeBookLs(isbn){ //using the books isbn to remove
    let books = Store.getBooks();
    console.log(typeof isbn);
    books.forEach(function (book,index){
      if(book.isbn === isbn){
        books.splice(index,1);
      }
    });
    localStorage.setItem('books',JSON.stringify(books));
  }
}




//EVENT LISTENERS
const form = document.querySelector('#book-form');
let title,author,isbn; //declaring outside of vent listener so that arent declared every time;
form.addEventListener('submit',function(e){
  //Form values title,author, ISBN#
  title = document.querySelector('input[name="title"]').value;
  author = document.querySelector('input[name="author"]').value;
  isbn = document.querySelector('input[name="isbn"]').value;

  //make UI object and update the User Interface
  const ui = new UI();
  //check for validation
  if (title == '' || author == '' || isbn == '') {
    ui.alertMsg('check values','error');
  } else {
    //Grab form values ; make book object
    const book = new Book(title,author,isbn)
    ui.addBookToList(book); //adding book to list
    Store.addBook(book); // adding book to local storage
    ui.clearFields(); //clearing the form fields
    ui.alertMsg('Book added successfully','success');

    //prevent default of a form submittal
    e.preventDefault();
  }
});

//Remove book
document.querySelector('#book-list').addEventListener('click',function(e){
  if(e.target.classList.contains('delete')){
    const ui = new UI();
    ui.removeBook(e.target);
    Store.removeBookLs(e.target.parentElement.previousElementSibling.innerText);
    ui.alertMsg('Book Removed from List','success');

  }
});

//Page loads, books are checked in local storage and displayed
document.addEventListener('DOMContentLoaded',function(){
  Store.displayBooks();
});
