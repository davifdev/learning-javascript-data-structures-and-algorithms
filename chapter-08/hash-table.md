## Hash Table

Vamos conhecer a classe HashTable, também conhecida como HashMap: uma implementação com hash da classe Dictionary

O hashing consiste em encontrar um valor em um estrutura de dados o mais rápido possível.
Quando usamos uma função de hash, já sabemos em que posição o valor se encontra, portanto podemos simplesmente o acessar.
Uma função de hash é uma função que, dada uma key, devolve o endereço em que o valor está na tabela.
Em ciência da computação, a tabela hash tem vários casos de uso. Ela pode ser usada como arrays associativos, pois é uma implementação do dicionário, e também pode ser usada para indexar um banco de dados.

A linguagem JavaScript usa uma tabela hash internamente para representar cada objeto. Nesse caso, cada propiedade e cada método do objeto são armazenados como tipos de objeto key, e cada key aponta para o respectivo membro do objeto.

As classes HashTable e Dictionary são muito pareciadas. A diferença está no fato de que, na classe Dictionary, armazenamos o ValuePair na propiedade de key de table(depois de ter sido transformada em uma string); na classe HashTable, geramos um número a partir da key (hash) e armazenamos o ValuePair na posição ( ou propiedade) hash.

## HashTable x HashSet

Uma tabela hash é o mesmo que um mapa hash.
Em algumas linguagens de progamação, também temos a implementação de conjunto hash (hash set). A estrutura de dados de um conjunto hash é composta de um conjunto; contudo, para inserir, remover ou acessar elementos, usamos uma função hashCode.
A diferença é que, em vez de adicionar um par chave-valor, apenas o valor será inserido.

## Colisões nas tabelas hash

Ás vezes chaves diferentes podem ter o mesmo valor de hash. Chamaremos isso de colisão, pos tentaremos atribuir diferentes pares chave-valor á mesma posição na instância de HashTable.

## Separate Chaining

A técnica de encadeamento separado consistem em criar uma lista ligada para cada posição da tabela e armazenar os elementos. É a técnica mais simples que há para tratar colisões; no entanto, ela exige memória extra, além daquela ocupada pela instância de HashTable.

# Linear Probing

Outra técnica de resolução de colisão é a sondagem linear. É chamada de linear porque a colisão é tratada de modo que os valores serão armazenados diretamente na tabela, e não em uma estrutura de dados separada
Ao tentar adicionar um novo elemento, se a position do hash já estiver ocupada, tentaremos usar position + 1. Se a position + 1 estiver ocupada, tentaremos position + 2, e assim sucessivamente, até que uma posição livre seja encontrada na tabela hash.

Quando removemos uma chave-valor da tabela hash não será suficiente simplesmente remover o elemento da position, conforme implementamos nas estrutura de dados anteriores neste capítulo. Se somente removemos o elemento, isso poderá fazer com que uma posição vazia seja encontrada quando vuscamos outro elemento com o mesmo hash (position) resultando em um bug no algoritimo.

Há duas opções na técnica de sondagem linear. A primeira é a arbodagem da remoção soft (soft delete). Usamos um valor especial (flag) para sinalizar que a chave-valor foi apagada (remoção preguiçosa [lazy] ou soft), em vez de realmente apagar o elemento. Desta maneira a eficiência da tabela se deteriorará gradualmente, e as buscas de chaves-valores se tornarão mais lentas com o tempo.

A segunda abordagem exige verificar se é necessário mover um ou mais elementos uma position para trás. Ao procurar uma chave, essa abordagem evita encontrar uma posição vazia.

# Criando funções melhores de hash

A função de hash lose-lose que implementamos não é uma boa função de hash, conforme podemos concluir (há muitas colisões). Teríamos muitas colisões se usássemos essa função. Uma boa função de hash apresenta determinados fatores: O tempo para inserir e acessar um elemento (desempenho), além de uma baixa probabilidade de colisões.
