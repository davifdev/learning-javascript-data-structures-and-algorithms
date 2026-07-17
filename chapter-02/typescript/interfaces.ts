// Existem dois conceitos de Interface em TypeScript

// O primeiro está relacionado a atribuição de um tipo a uma variável.
// Uma descrição de métodos e atributos que um objeto deve ter
interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  return person.name;
}

const john = { name: "John", age: 25 };
const jane = { name: "Jane", age: 25, phone: "61 9 9554-2554" };

console.log(printName(john));
console.log(printName(jane));

// O segundo conceito está relacionado a progamação orientada a objetos. Uma interface é um contrato. Nele, podemos definir o comportamento que as classes ou as interfaces que implementarão esse contrato devem ter.
interface Comparable {
  compareTo(b: Person): number;
}

class MyObject implements Comparable {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  compareTo(b: Person): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
