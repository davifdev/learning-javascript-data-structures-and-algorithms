// Objetos JavaScript são coleções simples de pares de chave-valor
// Há duas maneiras de criar um objeto simples em JavaScript

// A primeira é assim
var obj_1 = new Object();
console.log("obj_1: ", obj_1);

// A segunda é assim
var obj_2 = {};
console.log("obj_2: ", obj_2);

// Também podemos criar um objeto completo, desta maneira
obj_3 = {
  name: {
    first: "Gandalf",
    last: "the Grey",
  },
  address: "Middle Earth",
};

console.log("obj_3: ", obj_3);

// Uma chave é um atributo do objeto, e o valor é o valor da propiedade
// Em POO um objeto é uma instância de um classe, e uma classe define características de um objeto

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;

  this.printIsbn = function () {
    console.log(this.isbn);
  };
}

Book.prototype.printTitle = function () {
  console.log(this.title);
};

var book = new Book("title", "pag", "isbn");
console.log(book.title);
console.log(book.pages);
console.log(book.isbn);

book.printTitle();
book.printIsbn();
