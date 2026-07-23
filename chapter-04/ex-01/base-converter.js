class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.items = {};
  }
}

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let baseString = "";
  let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(10, 2));
console.log(baseConverter(104558615, 16));
console.log(baseConverter(104558615, 8));
