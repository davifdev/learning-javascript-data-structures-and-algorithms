import { ValuePair } from "../models/value-pair.js";
import { defaultToString } from "../utils/index.js";

export class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // O JavaScript nos permite usar somente strings como key/propiedades dos objetos. Caso tenhamos um objeto complexo passado como key será necessário transformá-lo em uma string.
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  // Uma maneira diferente de implementar esse mesmo método seria verificar se o value que gostariámos de obter existe aantes. No entanto com essa segunda abordagem, estaríamos obtendo a string para key e acessando o objeto table duas vezes; a primeira no método hasKey e a segunda dentro do if.
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;

    // if (this.hasKey(key)) {
    //   return this.table[this.toStrFn(key)];
    // }
    // return undefined;
  }

  keyValues() {
    const valuePairs = [];
    for (const k in this.table) {
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k]);
      }
    }
    return valuePairs;
    // return Object.values(this.table);
  }

  keys() {
    // return this.keyValues().map((valuePair) => valuePair.key);
    const keys = [];
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      keys.push(valuePairs[i].key);
    }
    return keys;
  }

  values() {
    // return this.keyValues().map((valuePair) => valuePair.value);
    const values = [];
    const valuesPairs = this.keyValues();
    for (let i = 0; i < valuesPairs.length; i++) {
      values.push(valuesPairs[i].value);
    }
    return values;
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);

      if (result === false) {
        break;
      }
    }
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

const dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@gmail.com");
dictionary.set("Gandalf", "gandalf@gmail.com");
dictionary.set("Tyrion", "tyrion@gmail.com");
console.log(dictionary);
// dictionary.forEach((k, v) => {
//   console.log("forEach: ", `key: ${k}, value: ${v}`);
// });
// console.log(dictionary.hasKey("Gandalf"));
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get("Tyrion"));
// dictionary.remove("John");
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.keyValues());
