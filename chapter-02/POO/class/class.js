function BookConstructor(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

BookConstructor.prototype.printTitle = function () {
  console.log(this.title);
};

const bookConstructor = new BookConstructor(
  "The lord of the rings",
  840,
  "isbn",
);
bookConstructor.printTitle();

class BookClass {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printTitle() {
    console.log(this.title);
  }
}

const bookClass = new BookClass("Batman Dark Knight", 489, "isbn");
bookClass.printTitle();
