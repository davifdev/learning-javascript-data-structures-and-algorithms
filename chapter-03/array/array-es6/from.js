// O método Array.from cria um novo array a partir de um array existente
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers2 = Array.from(numbers);
console.log(numbers2);

// Também podemos passar uma função para que possamos determinar quais valores queremos mapear
const numbers3 = Array.from(numbers, (x) => x % 2 === 0);
console.log(numbers3);
