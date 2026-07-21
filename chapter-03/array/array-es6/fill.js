// O método fill preenche o array com um valor.
const numbers = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Array default: ", numbers);
numbers.fill(0);
console.log("Array with fill: ", numbers);

// Também é possível passar o índice de início a partir do qual queremos preencher o array.
numbers.fill(2, 1);
console.log("Array with index of init: ", numbers);

// Também é possível passar o índice final até o qual queremos preencher o array, o fim não é incluído.
numbers.fill(1, 3, 5);
console.log("Array with index of init and end: ", numbers);

// O método fill é ótimo se quisermos criar um array e inicializar seus valores.
let ones = Array(6).fill(1);
console.log(ones);
