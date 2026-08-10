import { ValuePair } from "../../models/value-pair.js";
import { defaultToString } from "../../utils/index.js";

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

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

  get(key) {
    const valuerPair = this.table[this.toStrFn(key)];
    return valuerPair == null ? undefined : valuerPair.value;
  }

  keyValues() {
    const valuesPairs = [];
    for (let k in this.table) {
      if (this.hasKey(k)) {
        valuesPairs.push(this.table[k]);
      }
    }
    return valuesPairs;
  }

  key() {
    const keys = [];
    const valuesPairs = this.keyValues();
    for (let i = 0; i < valuesPairs.length; i++) {
      keys.push(valuesPairs[i].key);
    }
    return keys;
  }

  values() {
    const values = [];
    const valuesPairs = this.keyValues();
    for (let i = 0; i < valuesPairs.length; i++) {
      values.push(valuesPairs[i].value);
    }
    return values;
  }

  size() {
    return this.key().length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
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

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    const valuesPairs = this.keyValues();
    const objString = `${valuesPairs[0].toString()}`;
    for (let i = 1; i < valuesPairs.length; i++) {
      objString = `${objString}, ${valuesPairs[i].toString()}`;
    }

    return objString;
  }
}

const map = new Dictionary();
map.set("Gandalf", "gandalf@gmail.com");
console.log(map.toString());
map.forEach((k, v) => {
  console.log("forEach: ", `key: ${k}, value: ${v}`);
});
