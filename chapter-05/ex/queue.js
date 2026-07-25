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
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(3);
console.log(queue.dequeue());
