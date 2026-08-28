import { defaultCompare, swap } from "../utils/index.js";
// 1. Crie um heap máximo usando o array a ser ordenado como o array original.
// 2. Depois de criar o heap máximo, o maior valor estará armazenado no primeiro índice do heap. Substituiremos o primeiro valor pelo último do heap, decrementando o tamanho do heap de 1.
// 3. Por fim, executamos heapify (sift down) na raiz do heap e repetimos o passo 2 até que o tamanho do heap seja igual a 1.

function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}
