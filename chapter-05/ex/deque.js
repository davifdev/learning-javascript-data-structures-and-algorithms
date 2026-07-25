class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      console.log("Caiu aqui");
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      console.log("Agora ele vai cair aqui!");
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  peekFront() {
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
}

const deque = new Deque();
deque.addBack(1);
deque.addBack(2);
deque.addBack(3);
console.log(deque.removeFront());
deque.addFront(5);
console.log(deque);
deque.addFront(5);
console.log(deque);
