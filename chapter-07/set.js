class Set {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  // O protótipo de Object tem o método hasOwnProperty, que devolve um booleano informando se o objeto tem a propiedades especificada diretamente no objeto ou não, o operador in devolve um booleano informando se o objeto tem a propiedade espeficicada na cadeia do objeto.
  hasElement(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  // Dado um element podemos verificar se ele já está presente no conjunto. Se não estiver, adicionaremos element ao conjunto.
  add(element) {
    if (!this.hasElement(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  // Se o element especificado está presente no conjunto, removeremos element do conjunto.
  delete(element) {
    if (this.hasElement(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  // Remove todos os valores do conjunto
  clear() {
    this.items = {};
  }

  // Devolve a quantidade de elementos presente no conjunto
  size() {
    return Object.keys(this.items).length;
  }

  // Extrair cada propiedade o objeto items  manualmente, e contar quantas propiedades existem no objeto.
  sizeLegacy() {
    let count = 0;

    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        this.count++;
      }
    }

    return count;
  }

  values() {
    return Object.values(this.items);
  }

  valuesLegacy() {
    let values = [];

    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }

    return values;
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  unionLegacy(otherSet) {
    const unionSet = new Set();
    let values = this.values();
    for (let i of values) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i of values) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.hasElement(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }
}

// Union
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
const unionAB = setA.union(setB);
console.log(unionAB.values());

// Intersection
const setIA = new Set();
setIA.add(1);
setIA.add(2);
setIA.add(3);
const setIB = new Set();
setIB.add(2);
setIB.add(3);
setIB.add(4);
const intersectionAB = setIA.intersection(setIB);
console.log(intersectionAB.values());
