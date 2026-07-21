// Métodos find e findIndex
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 26];

function multipleOf13(element, index, array) {
  return element % 13 === 0;
}

console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

// Os métodos find e findIndex recebem uma função de callback, a qual buscará um valor que satisfaça a condição presente na função de teste.
// A diferença entre find e find é que o método find devolve o primeiro valor do array que satisfaça a condição proposta. O método findIndex devolve o índice do primeiro valor do array que satisfaça a doncição, caso não seja encontrado, undefined será devolvido.
