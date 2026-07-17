interface Comparable<T> {
  compareTo(b: T): number;
}

// Este recurso é útil para garantir que estamos comparando objetos do mesmo tipo
class MyObject implements Comparable<MyObject> {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  compareTo(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
