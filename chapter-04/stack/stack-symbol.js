// A ES2015 introduziu um novo tipo primitivo chamado Symbol que é imutável e pode ser usado como propiedade de um objeto. Essa abordagem oferece uma propiedade private falsa para a classe, pois o método Object.getOwnPropertySymbols também foi introduzido na ES6 e pode ser usado para obter todos os símbolos de propiedade declaradas na classe. Como a propiedade é uma array podemos executar qualquer operação de array, por exemplo remover ou acrescentar um elemento no meio dele.

const _items = Symbol("stackItems");

class Stack {
  constructor() {
    this[_items] = [];
  }

  push(element) {
    this[_items].push(element);
  }
}

const stack = new Stack();

const objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(stack.push(5));
console.log(stack.push(5));
console.log(stack.push(5));
