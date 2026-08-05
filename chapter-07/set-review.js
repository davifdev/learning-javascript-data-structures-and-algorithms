class Set {
  constructor() {
    this.items = {};
  }

  // Verificar se um elemento existe true/false
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }

    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  values() {
    const valuesList = [];

    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        valuesList.push(this.items[key]);
      }
    }

    return valuesList;
  }

  size() {
    let count = 0;

    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }

    return count;
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet.values();
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.lenght - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach((value) => {
      if (biggerSet.incluces(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet.values();
  }

  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet.values();
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });

    return isSubset;
  }
}

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);

console.log(setA.isSubsetOf(setB));
