// Todo o código-fonte deste capítulo é um código TypeScript válido. A diferença é que o TypeScript fará verificação de tipos em tempo de compilação para garantir que estamos manipulando somente arrays nos quais todos os valores tenham o mesmo tipo de dado.

// Por causa da inferência de tipo, o TypeScript entende que a declaração do array numbers é igual a const numbers: number[], por isso não precisamos declarar explicitamente o tipo da variável se ela for inicializada em sua declaração.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

interface Person {
  name: string;
  age: number;
}

const friends: Person[] = [
  { name: "John", age: 28 },
  { name: "Jane", age: 26 },
];

function comparePerson(a: Person, b: Person) {
  return a.age < b.age;
}

// Para usar verificação em arquivos JavaScript usamos @ts-check
