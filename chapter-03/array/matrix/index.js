// Arrays bidimensionais e multidimensionais. Uma matriz(array bidimensional ou um array de arrays)
// A linguagem JavaScript aceita penas arrays unidimensionais; ela não tem suporte para matrizes. Contudo podemos implementá-las, ou implementar qualquer array multidimensional, usando array de arrays.

// Array bidimensional
// Cada linnha representa o dia, e cada coluna representa a temperatura de hora em hora;
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 73, 73];

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.table(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp);

// Array multidimensional
const matrix3x3x3 = [];

for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.table(matrix3x3x3[i][j][z]);
    }
  }
}
