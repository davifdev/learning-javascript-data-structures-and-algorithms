class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digitis = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digitis[remStack.pop()];
  }
  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
