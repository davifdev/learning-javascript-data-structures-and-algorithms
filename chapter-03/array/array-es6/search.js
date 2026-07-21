// Pesquisa
// Temos duas opções para pesquisa: o método indexOf, que devolve o índice do primeiro elemento corespondente ao argumento passado e lastIndexOf que retorna o índice do último elemento encontrado.
// Se o elemento não for encontrado ele retorna -1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));
