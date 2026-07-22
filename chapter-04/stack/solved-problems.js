// As pilhas têm uma variedade de aplicações nos problemas do mundo real. Elas podem ser usadas para problemas de backtracking, a  fim de lembrar as tarefas ou os caminho visitados para desfazer ações
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

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";
  while (number > 0) {
    // { 1 }
    rem = Math.floor(number % 2); // { 2 }
    remStack.push(rem); // { 3 }
    number = Math.floor(number / 2); // { 4 }
  }
  while (!remStack.isEmpty()) {
    // { 5 }
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

// { 1 } = Vamos obter o resto da divisão
// { 2 } { 3 } = Push do valor na pilha
// { 4 } = O JavaScript tem um tipo de dado númerico, mas não há uma distinção entre inteiros e números de ponto flutuante.
// { 5 } = Fazemos o pop dos elemenos da pilha até que ela esteja vazia, concatenando os elementos removidos em uma string

console.log(decimalToBinary(10));
