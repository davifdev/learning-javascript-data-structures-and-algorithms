// spread operator
let nums = [3, 4, 5];

function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(...nums));

console.log(sum.apply(undefined, nums));

// rest operator
function restParameterFunction(x, y, ...rest) {
  return (x + y) * rest.length;
}

console.log(restParameterFunction(1, 2, "hello", true, 7));

function restParameterFuncion_2(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}

console.log(restParameterFuncion_2(1, 2, "hello", true, 7));

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2));
