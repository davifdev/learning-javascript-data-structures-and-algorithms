// Em JavaScript um Objeto é um conjunto de pares chave e valor. Para adicionar element á pilha, usaremos a variável count como a chave do objeto items, e element será o seu valor.
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
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

  peak() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(6);
stack.push(4);

console.log(stack.toString());

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
