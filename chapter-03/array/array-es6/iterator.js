// Iterando com o laço for of
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of numbers) {
  // console.log(num % 2 === 0 ? `number ${num} is even` : `number ${num} is odd`);
}

// Usando o objeto @@iterator devolve um objeto iterador que contém os pares chave/valor
let iterator = numbers[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

iterator = numbers[Symbol.iterator]();
for (const num of iterator) {
  // console.log("Usando for of: ", num);
}

// Métodos entries, keys e values de array
// Se done tiver um valor igual a false, isso significa que ainda há mais chaves para iterar no array

// O método entries devolve o @@iterator, que contém pares chave/valor
let numberEntries = numbers.entries();
console.log("Chave/Valor: ", numberEntries.next());

numberEntries = numbers.entries();
for (const value of numberEntries) {
  // console.log(value);
}

// O método keys devolve @@iterator que contém as chaves do array.
let numberKeys = numbers.keys();
console.log("Chave: ", numberKeys.next());

// O método values devolve @@iterator, que contém os valores do array
let numberValues = numbers.values();
console.log("Valor: ", numberValues.next());
