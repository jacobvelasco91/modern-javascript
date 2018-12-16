/*
  Writing the same programming code as in app.js, but using ES6 classes instead
*/

//Book class
class BookList {
  constructor(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class
class UI {
  constructor() {

  }
}

//Local Storage class ; Storing the values
//Going to be using static methods ; no instance of store
class Store {
  static getBooks(){
    let books;
    if (localStorage.getitem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks(){
    const books = Store.getBooks();
    books.forEach(function(book){
      const ui = new UI();
      ui.addBook(book);
    });
  }
  static addBook(book){
    let books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }
  static removeBook(isbn){ //using the books isbn to remove
    let books = Store.getBooks();
    books.forEach(function (book,index){
      if (books.isbn == isbn ) {
        books.splice(index,1); // w/splice original array IS AFFECTED
      }
    });
    localStorage.setItem('books',JSON.stringify(books));
  }
}
