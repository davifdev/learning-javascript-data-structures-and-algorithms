// O último elemento que entra é o primeiro elemento que sai
// Retornar o elemento do topo da pilha
// Verificar se a pilha está vazia
// Retornar o size da pilha
// Tempo O(n) Linear. Isso significa que para a maioria dos métodos devemos iterar pelo array até encontrarmos o elemento que estamos procurando

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

  isEmpty() {
    return this.items === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push(10);
stack.push(5);
stack.push(8);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
