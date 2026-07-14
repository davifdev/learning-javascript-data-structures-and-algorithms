// Operador de Igualdade
console.log(null == undefined);
console.log(undefined == null);
console.log(10 == "10");
console.log("10" == 10);
console.log(false == 0);
console.log(1 == true);
console.log(1 == { name: "John" });
console.log({ name: "John" } == 1);

console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number(1));

console.log(0 == null);

console.log(Object.is(1, 1));

let text = "hello world";

console.log(text.valueOf());

// Igualdade Estrita
console.log(10 === 10);
console.log("Hello World" === "Hello World");
console.log(false === false);
console.log(true === true);
const obj1 = {
  name: "John",
  age: 25,
};

const obj2 = obj1;

console.log(obj1 === obj2);
