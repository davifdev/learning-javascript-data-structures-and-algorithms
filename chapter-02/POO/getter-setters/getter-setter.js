// É possível criar funções getters e setters para os atributos de classe, Embora os atributos de classe não sejam privados como em outras linguagens orientada a objetos (encapsulamento), é bom seguir um padrão de nomenclatura.

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const lotrChar = new Person("Frodo");
console.log(lotrChar.name);
lotrChar.name = "Gandalf";
console.log(lotrChar.name);
lotrChar._name = "Sam";
console.log(lotrChar.name);
