// Definindo valores default para os parâmetros das funções com ES6
function sumES6(x = 1, y = 2, z = 3) {
  return x + y + z;
}

console.log(sumES6(4, 2));

// Definindo valores fefault para os parâmetros das funções com ES5
function sumES5(x, y, z) {
  if (x === undefined) x = 1;
  if (y === undefined) x = 2;
  if (z === undefined) x = 3;

  return x + y + z;
}

// Definindo valores default para os parâmetros das funções com ES5 sem saber os parâmetros
function sumES5_2() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 0 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 0 && arguments[2] !== undefined ? arguments[2] : 3;

  return x + y + z;
}

console.log(sumES5_2());

// Uma função tem um objeto embutido chamado arguments. Esse objeto é um array dos argumentos usados quando a função é chamada. Podemos acessar dinamicamente os argumentos e usá-los, mesmo que não saibamos o nome deles.
