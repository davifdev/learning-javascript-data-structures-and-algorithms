function fibonacciIterative(n) {
  // n = 5
  if (n < 1) return 0; // false
  if (n <= 2) return 1; // false

  // f(n) = f(n - 1) + f(n - 2)
  let fibNMinus2 = 0; // f(n - 2)
  let fibNMinus1 = 1; // f(n - 1)
  let fibN = n; // n = 5 // f(n)

  const fibonacci = [];
  // while 2 -= 5 true
  for (let i = 2; i <= n; i++) {
    // 1. i = 2, 2. i = 3, 3. i = 4, 4. i = 5
    fibN = fibNMinus1 + fibNMinus2; // 1. fibn = 1 + 0 = 1, 2. fibn = 1 + 1 = 2, 3. fibn = 2 + 1 = 3, 4. fibn = 3 + 2 = 5
    fibNMinus2 = fibNMinus1; // 1. fibNMinus2 = 1, 2. fibNMinus2 = 1, 3. fibNMinus2 = 2, 4. fibNMinus2 = 3
    fibNMinus1 = fibN; // 1. fibNMinus1 = 1, 2. fibNMinus1 = 2, 3. fibNMinus2 = 3, 4. fibNMinus2 = 5
    fibonacci.push(fibN); // [1, 2, 3, 5]
  }

  return fibonacci;
}

console.log(fibonacciIterative(5));

function fibonacci(n) {
  // fibonacci(5)
  if (n < 1) return 0;
  if (n <= 2) return 1;

  //           fibonacci(4)                 fibonacci(3)
  //               |                            |
  //  fibonacci(3) - fibonacci(2)  fibonacci(2) - fibonacci(1)

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
