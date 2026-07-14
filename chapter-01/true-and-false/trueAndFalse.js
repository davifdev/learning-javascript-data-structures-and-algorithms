// Em JavaScript true e false são um pouco complicados. Na maioria das linguagens, os valores booleanos true e false representam os resultados verdadeiro/false. Em JavaScript, uma string "Packt" é avaliada como true e uma string "" é avaliada como false.

function testTruthy(val) {
  return val ? console.log("Truthy") : console.log("Falsy");
}

testTruthy(true); // truthy
testTruthy(false); // falsy
testTruthy(new Boolean(false)); // truthy
testTruthy(""); // falsy
testTruthy("Packt"); // truthy
testTruthy(new String("")); // truthy
testTruthy(1); // truthy
testTruthy(-1); // truthy
testTruthy(NaN); // falsy
testTruthy(new Number(NaN)); // truthy
testTruthy({}); // truthy
var obj = { name: "John" };
testTruthy(obj); // truthy
testTruthy(obj.name); // truthy
testTruthy(obj.age); // Falsy
