import { defaultEquals } from "../utils/index.js";
import { Node } from "../models/linked-list-models.js";
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  // Adiciona um novo elemento no final da lista
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  // Esse método devolve o elemento que está em uma posição específica da lista, se o elemento não estiver na lista ele retorna undefined.
  getElement(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  // Esse método remove um elemento da lista
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElement(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  // Esse método insere um novo elemento em uma posição específica da lista.
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElement(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  // Esse método devolve o índice do elemento da lista, se o elemento não estiver na lista -1 será devolvido
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  // Esse método remove um elemento de uma posição específica da lista
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  // Esse método devolve o número de elementos contidos na lista ligada. É semelhante á propiedade length do array
  size() {
    return this.count;
  }
  // Esse método devolve true se a lista ligada não contiver nenhum elemento e false se o tamanho da lista ligada for maior que 0
  isEmpty() {
    return this.size() === 0;
  }
  getHead() {
    return this.head;
  }
  // Esse método devolve uma representação em string da lista ligada.
  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

const list = new LinkedList();
list.push(10);
list.push(5);
list.push(3);
console.log(list.indexOf(10));
console.log(list.toString());
