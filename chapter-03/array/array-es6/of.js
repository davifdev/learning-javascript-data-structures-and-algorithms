// O método Array.of cria outro array a partir dos argumentos passados para o método
const numbers1 = Array.of(1);
const numbers2 = Array.of(1, 2, 3, 4, 5, 6);

console.log(numbers1);
console.log(numbers2);

// Também podemos usar esse método para fazer a cópia de um array existente
const numbersCopy = Array.of(...numbers2);
console.log(numbersCopy);
