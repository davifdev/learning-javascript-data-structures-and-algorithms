// O método includes devolve true caso um elemento seja encontrado no array, e false caso contrário.
const fruits = ["Maçã", "Uva", "Pêra", "Melancia"];

console.log(fruits.includes("Melancia"));
console.log(fruits.includes("Abacaxi"));

// Também é possível passar um índice de início a partir do qual queremos que o array faça a pesquisa do valor
console.log(fruits.includes("Uva", 1));
