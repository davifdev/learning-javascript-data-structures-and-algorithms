function factorialIterative(number) {
  // number = 10
  // 10 < 0 = false
  if (number < 0) return undefined;
  let total = 1;

  //   n = 10, while 10 > 1 = true
  //   n = 9, while 9 > 1 = true
  //   n = 8, while 8 > 1 = true
  //   n = 7, while 7 > 1 = true
  //   n = 6, while 6 > 1 = true
  //   n = 5, while 5 > 1 = true
  //   n = 4, while 4 > 1 = true
  //   n = 3, while 3 > 1 = true
  //   n = 2, while 2 > 1 = true
  for (let n = number; n > 1; n--) {
    total = total * n; // total = 1 * 10 = 10, total = 10 * 9 = 90, total = 90 * 8 = 720, total = 720 * 7 = 5040, total = 5040 * 6 = 30.240, total = 30.240 * 5 = 151.200, total = 151.200 * 4 = 604.800, total = 604.800 * 3 = 1.814.400, total = 1.814.400 * 2 = 3.628.800
  }
  return total; // 3.628.800
}

const result = factorialIterative(10); // 3.628.800

console.log(result);

function factorial(n) {
  if (n === 1 || n === 0) return 1;

  return n * factorial(n - 1);
}

const result2 = factorial(3);
console.log(result2);
