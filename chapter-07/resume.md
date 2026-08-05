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

- <strong>União</strong>: dados dois conjuntos, devolve um novo conjunto com elementos dos dois conjuntos especificados. A u B = x
- Isso significa que x (o elemento) está presente em A ou x está presente em B.

- <strong>Interseção</strong>: dados dois conjuntos, devolve um novo conjunto com os elementos presentes em ambos os conjuntos. A ∩ B = x
- Isso significa que x está presente tanto em A quanto em B havendo, assim um compartilhamento de um ou mais elementos entre A e B.

- <strong>Diferença</strong>: dados dois conjuntos, devolve um novo conjunto com todos os elementos presentes no primeiro conjunto, mas não no segundo. A - B = x
- Isso significa que x está presente em A, mas não está presente em B.

- <strong>Subconjunto</strong>: dado dois conjuntos, devolve true se o elemento estiver presente nos dois conjuntos.
- Isso significa que, para todo x que estiver em A, ele também deve estar presente em B.

É Importante observar que os métodos <code>union</code>, <code>intersection</code> e <code>difference</code> não modificam a instância atual da classe <code>Set</code> e <code>otherSet</code>. Os métodos ou funções que não têm efeito colateral são chamados de <code>funções puras</code>. Uma função pura ela não modifica a instância atual nem os parâmetros: ela apenas gera um novo resultado.

## Multiconjuntos ou bags

A estrutura de dados de conjunto não permite elemntos duplicados. Entretanto em matemática, temos um conceito chamado multiconjunto (multiset), que permite que o mesmo elemento seja inserido no conjunto, mesmo que ele já tenha sido inserido antes. Os multiconjuntos (ou bags) podem ser muito úteis para contar quantas vezes o elemento está presente em um conjunto. Eles são frequentemente aplicados em sistemas de banco de dados.

## Resumo

Aprendemos a implementar uma classe Set do zero, a qual é semelhante á classe Set definida na ECMAScript 2015. Também discutimos alguns métodos que, em geral. não estão presentes nas implementações da estrutura de dados para conjuntos em outras linguagens de progamação como união, interseção, diferença e subconjunto. Implementamos uma classe Set completa, se comparada á implementação atual de Set em outras linguagens de progamação.
