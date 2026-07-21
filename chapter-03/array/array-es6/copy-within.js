// O método copyWithin copia uma sequência de valores do array para a posição de um índice de início.
let copyArray = [1, 2, 3, 4, 5, 6];

// Vamos supor que queremos copiar os valores 4, 5, 6 para as primeiras três posições
copyArray.copyWithin(0, 3);

console.log(copyArray);

// Considere agora que queremos copiar os valores 4 e 5, para as posições 1 e 2
// o fim não é incluído
copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);
console.log(copyArray);
