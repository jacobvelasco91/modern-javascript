/*
  With JavaScript we will grab the values from the form -> create a book Object from the values -> add the book object to the UI list.

*/

//book constuctor ... (or Book class)
function Book (title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor ...(or UI class)
function UI(){}

/*** local storage array  STORE CLASS ***/
function Store(){}

Store.getBooks = function(){
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}
Store.displayBooks = function(){
  const books = Store.getBooks();
  books.forEach(function(book){
    const ui = new UI();
    ui.addBook(book);
  });
}
Store.addBookLs = function(book) {
  const books = Store.getBooks();
  books.push(book);
  localStorage.setItem('books',JSON.stringify(books));
}
Store.removeBook = function(isbn) {
  const books = Store.getBooks();
  books.forEach(function(book,index){
    if (book.isbn === isbn) {
      books.splice(index,1)
    }
  });
  localStorage.setItem('books',JSON.stringify(books));
}

/*adding method to the UI prototype*/
//addBook method
UI.prototype.addBook = function(book){
  //grab the table body to make a list
  const list = document.querySelector('tbody');
  //create a row element
  const row = document.createElement('tr');
  //add data to the row.innerHTML from the book parameter
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a class="delete" href="#">X</a></td>
  `;
  //Now append the row the the tbody/list
  list.appendChild(row);
}
//clear Form fields
UI.prototype.clearFields = function(){
  document.querySelector('input[name="title"]').value = '',
  document.querySelector('input[name="author"]').value = '',
  document.querySelector('input[name="isbn"]').value = '';
}
//adding an alert message to the app
UI.prototype.alertMsg = function(msg,alertClass){
  const div = document.createElement('div');
  div.className = `alert ${alertClass}`;
  div.appendChild(document.createTextNode(msg));
  const parent = document.querySelector('.container');
  const beforeElement = document.querySelector('#book-form');
  parent.insertBefore(div,beforeElement);
  setTimeout(function(){document.querySelector('.alert').remove();},2000);
}
//delete book
UI.prototype.deleteBook = function(target){
  if (target.classList.contains('delete')) {
    target.parentElement.parentElement.remove();
  }
}

//grab the form element, and listen for a submit
const form = document.querySelector('#book-form');
form.addEventListener('submit',function(e){
  //grabbing the values from the form
  const title = document.querySelector('input[name="title"]').value,
        author = document.querySelector('input[name="author"]').value,
        isbn = document.querySelector('input[name="isbn"]').value;


  //instantiate a Book object; use form values for arguments
  const book = new Book(title,author,isbn);
  //update the UI
  const ui = new UI(); //creating UI object
  if (title == '' || author == '' || isbn == '') {
    ui.alertMsg('cannot be empty','error');
  } else {
    ui.alertMsg('book added successfully','success');
  //call the addBook UI method; use the book object as an argument for values
  ui.addBook(book);
  //add book to localStorage
  Store.addBookLs(book);
  //call the clearField UI method;
  ui.clearFields();
  }

  //preventing a default form uri/url submittal
  e.preventDefault();
})

//Event listener to haer for a click in the list
document.getElementById('book-list').addEventListener('click',removeBook);


//remove book function
function removeBook(e) { //take in the event param
  const ui = new UI;
  ui.deleteBook(e.target);

  //remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
}

//event listner to get and load display books
document.addEventListener('DOMContentLoaded',Store.displayBooks);
