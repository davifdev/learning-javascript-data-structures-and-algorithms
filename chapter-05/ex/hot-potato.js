class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) return undefined;
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

function hotPotato(elementItems, num) {
  const queue = new Queue();
  const elimitatedList = [];

  for (let i = 0; i < elementItems.length; i++) {
    queue.enqueue(elementItems[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  };
}
const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The Winner is ${result.winner}`);
