// Se quisermos exibir todos os elementos do array em uma única string, podemos usar o método toString
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers.toString());

// O método join junta todos os elementos de um array em uma string e retorna essa string
// Ele possui um separador para separar cada elemento do array. Se omitido, os elementos do array são separados por vírgula, se for uma string vazia, todos os elementos serão juntos sem nenhum cacacter entre eles.
const numbersString = numbers.join("-");
console.log(numbersString);
