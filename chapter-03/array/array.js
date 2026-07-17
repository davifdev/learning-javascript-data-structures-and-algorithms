// Um array é a estrutura de dados mais simples em memória. Por esse motivo, todas as linguagens de progamação tem um tipo de dado array incluído.

// Um array armazena valores que são todos do mesmo tipo sequencialmente. Embora o JavaScript nos permita criar arrays com valores de tipos distintos.
const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.4;
averageTemp[2] = 42.4;
averageTemp[4] = 52;
averageTemp[5] = 60.8;

//               0     1     2    3    4
// averageTemp [31.9, 35.4, 42.4, 52, 60.8]

// Criando e inicializando arrays
let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
);
console.log(daysOfWeek.length);

// Acessando elementos e fazendo uma iteração em um array
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// Descobrindo quais são o números da sequência de Fibonacci
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  // console.log(fibonacci[i]);
}

// Acrescentando elementos

// Inserindo um elemento no final do array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;

console.log(numbers);

// Em JavaScript um array é um objeto mutável. Podemos facilmente lhe acrescentar novos elementos. O objeto crescerá dinamicamente á media que novos elementos forem adicionados.

// Usando o método push
numbers.push(11);
numbers.push(12, 13);

// Inserindo um elemento na primeira posição
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(-1);
console.log(numbers);

// Usando o método unshift
numbers.unshift(-2);
numbers.unshift(-3, -4);

// Removendo um elemento ao final do array
numbers.pop();

// Removendo um elemento da primeira posição
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

console.log(numbers);

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return this.reIndex(this);
};

numbers.removeFirstPosition();

// Usando o método shift
numbers.shift();
