const library = {
  name: "City Library",
  books: [],

  addBook(title, author, isbn) {
    this.books.push({ title, author, isbn });
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title) || null;
  },

  listAllBooks() {
    this.books.forEach(book => console.log(book.title));
  }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function (courseName, title, author, isbn) {
  this.courses.push(courseName);
  this.addBook(title, author, isbn);
};

library.addBook("Clean Code", "Robert C. Martin", "111");
library.addBook("Eloquent JavaScript", "Marijn Haverbeke", "222");

universityLibrary.addCourseBook(
  "CMPS2212",
  "You Don’t Know JS",
  "Kyle Simpson",
  "333"
);

library.listAllBooks();
