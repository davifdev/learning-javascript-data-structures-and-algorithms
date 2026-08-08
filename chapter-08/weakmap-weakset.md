## Classes WeakMap e WeakSet da ES2015

Junto com as duas novas estruturas de dados Set e Map, a ES2015 introduziu também uma versão dessas classes com tipos fracos: WeakMap e WeakSet
Basicamente, a única diferença entre as classes Map ou Set e suas versões fracas são:

- As classes WeakSet ou WeakMap não têm os métodos entries keys e values
- É possível usar somente objetos como chaves.

O motivo para a criação e o uso dessas duas classes tem a ver com o desempenho. Como WeakSet e WeakMap têm tipos fracos (usam objetos como chaves), não há nenhuma referência forte para as chaves. Esse comportamento permite que o coletor de lixo de JavaScript limpe uma entrada completa do mapa ou do conjunto.

Outra vantagem das versões fracas é que só podemos obter o valor se tivermos a sua chave. Não há maneiras de obter um valor, a menos que você saiba qual é a chave. Isso confirma a nossa opção de usar a classe WeakMap para encapsular as propiedades privadas das classes ES2015.
