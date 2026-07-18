class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printTitle() {
    console.log(this.title);
  }
}
class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }
}

const jsBook = new ITBook(
  "Learning JS Algorithms",
  "200",
  "1234567890",
  "JavaScript",
);

console.log(jsBook);
