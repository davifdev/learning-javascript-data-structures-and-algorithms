class Stack {
  constructor() {
    this.items = [];
  }

  // [x] - Adicionar um elemento ao final da pilha
  push(element) {
    this.items[this.items.length] = element;
  }

  // [x] - Remover um elemento ao final da pilha
  pop() {
    return this.items.pop();
  }

  // [x] - Verificar se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // [x] - Retornar o elemento do topo da pilha
  peek() {
    return this.items[this.items.length - 1];
  }

  // [x] - Retornar o tamanho da pilha
  size() {
    return this.items.length;
  }

  // [x] - Limpar todos os dados da pilha
  clear() {
    this.items = [];
  }
}

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let binaryString = "";
  let rem;

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(decimalToBinary(10));
