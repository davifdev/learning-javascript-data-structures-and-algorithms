// As funções de seta são uma ótima maneira de simplificar a sintaxe das funções na ES2015.

const circleAreaES5 = function (r) {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};

console.log(circleAreaES5(2));

const circleAreaES6 = (r) => {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};

console.log(circleAreaES6(2));

const circleAreaES6_2 = (r) => 3.14 * r * r;
console.log(circleAreaES6_2(2));

const sayHello = () => console.log("Hello!");
sayHello();
