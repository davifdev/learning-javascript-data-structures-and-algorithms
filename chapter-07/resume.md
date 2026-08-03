## Conjuntos (Set)

É uma estrutura de dados sequencial não ordenada, porém não permite valores duplicados.

Um conjunto é uma coleção não ordenada de itens, composta de elementos únicos. Esta estrutura de dados usa o mesmo conceito matemático dos conjuntos finitos.

Em matemática, um conjunto é uma coleção de objetos distintos.

Temos um conjunto de números naturais, que é composto dos números inteiros maiores ou iguais a 0, isto é N = {0, 1, 2, 3, 4, 5, 6}

Temos também o conceito de conjunto nulo. Um conjunto sem elementos é chamado de conjunto nulo ou conjunto vazio. Um exemplo seria o conjunto dos números primos entre 24 e 29.
Como não há nenhum número primo entre 24 e 29, o conjunto será vazio.

Números primos são números naturais maiores que 1 que só podem ser divididos por 1 e por eles mesmos.

## Operações em conjuntos

O conjunto é um dos conceitos mais básicos em matemática e é muito importante também em ciência da computação. Uma das principais aplicações em ciência da computação se dá em banco de dados. Os conjuntos são usados no design e no processamento de consultas. Ao criar uma consulta para obter um conjunto de dados em um banco de dados relacional, fazemos o design da consulta usando a notação de conjunto e o banco de dados também devolverá um conjunto de dados.
Quando criamos uma consulta SQL, podemos especificar se queremos ler todos os dados de uma tabela ou um subconjunto deles. Também podemos obter dados que são comuns em duas tabelas, os quais estão presentes apenas em uma tabela (e não na outra) ou nas duas. Essas operações são conhecidas como junções (joins), e a base das junções sql são operações em conjunto.

- <strong>União</strong>: dados dois conjuntos, devolve um novo conjunto com elementos dos dois conjuntos especificados.

- <strong>Interseção</strong>: dados dois conjuntos, devolve um novo conjunto com os elementos presentes em ambos os conjuntos.

- <strong>Diferença</strong>: dados dois conjuntos, devolve um novo conjunto com todos os elementos presentes no primeiro conjunto, mas não no segundo.

- <strong>União</strong>: confirma se um dado conjunto é um subconjunto do outro

É Importante observar que os métodos <code>union</code>, <code>intersection</code> e <code>difference</code> não modificam a instância a tual da classe <code>Set</code> e <code>otherSet</code>. Os métodos ou funções que não têm efeito colateral são chamados de <code>funções puras</code>. Uma função pura ela não modifica a instância atual nem os parâmetros: ela epans gera um novo resultado.
