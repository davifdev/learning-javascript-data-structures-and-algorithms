// array destructuring é uma maneira de inicializar variáveis de uma só vez
let [x, y, z] = ["a", "b", "c"];
console.log(x, y, z);

// fazer swap sem a necessidade de criar variáveis temp
let num1 = 1;
let num2 = 2;

// let temp = num1;
// num1 = num2;
// num2 = temp;
[num1, num2] = [num2, num1];
console.log(num1, num2);

// property shorthand

let [first_name, last_name] = ["Davi", "Fernandes"];
const person = {
  first_name,
  last_name,
};
console.log(person);

// shorthand method names
const sayHello = {
  name: "Davi",
  printHello() {
    console.log("Hello: " + this.name);
  },
};

sayHello.printHello();
