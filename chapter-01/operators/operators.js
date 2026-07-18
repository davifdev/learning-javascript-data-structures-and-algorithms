// Precisamos de operadores para realizar qualquer operação em uma linguagem de progamação
// A linguagem JavaScript possui, operadores aritiméticos, operadores  de comparação, operadores de atribuição operadores lógicos, e unários.
var num = 0;
// Operadores aritiméticos
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;

// Operadores de atribuição
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

// Operadores de comparação
console.log("num == 1: " + (num == 1));
console.log("num === 1: " + (num === 1));
console.log("num != 1: " + (num != 1));
console.log("num > 1: " + (num > 1));
console.log("num < 1: " + (num < 1));
console.log("num >= 1: " + (num >= 1));
console.log("num <= 1: " + (num <= 1));

// Operadores lógicos
console.log("true && false: " + (true && false));
console.log("true || false: " + (true || false));
console.log("!true: " + !true);

// Operador typeof devolve o tipo da variável ou expressão
console.log("typeof num: ", typeof num);
console.log("typeof Packt: ", typeof "Packt");
console.log("typeof true: ", typeof true);
console.log("typeof [1, 2, 3]: ", typeof [1, 2, 3]);
console.log("typeof {name: 'John'}: ", typeof { name: "John" });

// De acordo com a especificação da linguagem JavaScript existem dois tipos de dados
/*
  Tipos de dados primitivos: string, number, boolean, undefined, symbol
  Tipos de dados derivados/objeto: objetos JavaScript, array, function e regEx
*/

// Operador delete apaga propiedade de um objeto
var myObj = { name: "John", age: 21 };
delete myObj.age;
console.log(myObj);
