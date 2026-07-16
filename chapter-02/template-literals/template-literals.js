// Templates literais são um recurso interessante, pois podemos criar strings sem a necessidade de concatenar os valores

const book = {
  name: "Learning JavaScript and DataStructures and Algorithms",
};

console.log(
  "You are reading " +
    book.name +
    ".,\n and this is a new line\n and so is this",
);

console.log(`
  You are reading ${book.name}
  and this is a new line
  and so is this
`);
