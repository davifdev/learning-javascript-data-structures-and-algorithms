const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.reverse();

// O método sort deixa os elementos em ordem lexicográfica (ordem alfabética) e pressupões que todos os elementos são string
numbers.sort();
console.log(numbers);

// Também podemos implementar a nossa própia função de comparação
// se a < b retorna -1, ordena a para um indice anterior ao b, o a vem primeiro
// se a > b retorna 1, ordena b para um índice anterior que a
// se a === b retorna 0, deixa a e b inalterados em relação um ao outro, mas ordenados em relação aos outros
// A funçao sort pode receber um parâmetro chamado compare function.
numbers.sort((a, b) => a - b);
console.log(numbers);

// Ordenação personalizada
// Podemos ordenar um array que contenha qualquer tipo de objeto, e podemos também criar uma compareFunction para comparar os elementos de acordo com o que for necessário.

const friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }

  if (a.age > b.age) {
    return 1;
  }

  return 0;
}

console.log(friends.sort(comparePerson));

// Ordenando strings
let names = ["Ana", "ana", "John", "john"];
console.log(names.sort());
// O JavaScript compara os caracteres de acordo com o seu valor ASCII, A J, a e j têm os seguintes valores ASCII decimais: A: 65, J: 74, a: 97 e j: 106

// Criando uma compareFunction contendo o código para ignorar a diferença entre letras maiúsculas e minúsculas
names = ["Ana", "ana", "John", "john"];

console.log(
  names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }

    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }

    return 0;
  }),
);

console.log(
  "Usando locale compare",
  names.sort((a, b) => a.localeCompare(b)),
);

// Para caracteres com acento, podemos usar o método localeCompare também
// O método localeCompare() retorna um número que indica se uma string de referência vem antes ou depois, ou é a mesma que a string fornecida na ordem de classificação.
const names2 = ["Maéve", "Maeve"];
console.log(
  "Usando locale compare com acentos: ",
  names2.sort((a, b) => a.localeCompare(b)),
);
