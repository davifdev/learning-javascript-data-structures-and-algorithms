Um array é o tipo mais comum de estrutura de dados em ciência da computação. Ás vezes precisaremos de alguma forma de estrutura de dados na qual tenhamos mais controle sobre o acréscimo e a remoção de itens. Há duas estrutura de dados que possuem uma semelhança com array, mas oferece um maior controle sobre a adição e remoção de elementos.

Estrutura de dados de pilha
Uma pilha é uma coleção ordenada de itens que obedece ao princípio LIFO (Last In First Out). A adição ou a remoção de novos itens ocorrem na mesma extremidade. O final da pilha é conhecido como topo, enquanto o lado oposto é conhecido como base. Os elementos mais novos ficam próximos ao topo, e os elementos mais antigos estão próximos da base.

Uma pilha também é usada pelos compiladores em linguagens de progamação, pela memória do computador para armazenar variáveis e chamadas de métodos, e também pelo histórico do navegador.

O modo mais fácil de criar uma classe Stack usa um array para armazenar seus elementos. Ao trabalhar com um conjunto grande de dados, também é necessário analisar qual o modo mais eficaz de manipular os dados.

Quando trabalhamos com arrays, a maioria dos métodos tem uma complexidade de tempo O(n). Isso significa que, para a maioria dos métodos devemos iterar pelo array até encontramos o elemento que estamos procurando.

Um array é um conjunto ordenado de elementos, e, para mantê-los assim, seria necessário ter mais espaço na memória também.

Com exeção do método toString, todos os outros métodos que criamos tem complexidade O(1), podemos acessar diretamente o elemento no qual estamos interessados e executar uma ação com ele (push, pop, peek)
