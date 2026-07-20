// Os arrays em JavaScript são objetos modificados, o que significa que todo array que criarmos terá alguns métodos disponíveis para uso.
// Arrays em JavaScript tem mais recursos disponíveis que os arrays primitivos em outras linguagens.

// Juntando vários arrays
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);

// Funções de iteração (es6)
const isEven = (x) => x % 2 === 0;

let numbersSum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < numbersSum.length; i++) {
  // console.log(`${numbersSum[i]}: ${isEven(i) ? "é Impar" : "é Par"}`);
}

// Iterando com o método every, itera pelos elementos do array até que a função devolva false;
console.log(numbersSum.every((num) => typeof num === "number"));
console.log(numbersSum.every(isEven));

// Iterando com o método some, apresenta o comportamento oposto ao método every; no entanto o método some itera pelos elementos do array até que a função devolva true
console.log(numbersSum.some(isEven));

// Iterando com forEach, faz a iteração de todo o array independentemente de tudo mais, executa uma função callback para cada elemento do array;
numbersSum.forEach((x) => console.log(x % 2 === 0));

// Usando map e  filter, esses métodos devolvem um novo array com um resultado.
// O método filter devolve um novo array com os elementos para os quais a função devolveu true
const myMap = numbersSum.map(isEven);
const evenNumbers = numbersSum.filter(isEven);
console.log("Usando o método map: ", myMap);
console.log("Usando o método filter: ", evenNumbers);

// Usando o método reduce, podemos usar essa função para devolver um valor que será somado a um acumulador, o qual será devolvido depois que o método reduce parar de executar.

const result = numbersSum.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(result);
