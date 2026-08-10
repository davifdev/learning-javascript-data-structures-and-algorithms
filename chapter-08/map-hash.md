## Dicionários e hashes

Os dicionários e hashes são estrutura de dados que armazenam valores únicos (valores não repetidos).
Em um conjunto, estamos interessados no própio valor como o elemento principal. Em um dicionário (ou mapa), armazenamos valores em pares [chave, valor], mas o modo como implementamos essas estruturas de dados é um pouco diferente, pois dicionários podem armazenar apenas um valor único por chave.

Os conjuntos é uma coleção de elementos distintos. Um dicionário é usado para armazenar pares [chave, valor], em que a chave pode ser usada para encontrar um elemento em particular.
Um dicionário é muito parecido com um conjunto; um conjunto armazena uma coleção de elementos [chave, chave] enquanto um dicionário armazena uma coleção de elementos [chave, valor].

Em ciência da computação, os dicionários são usados frequentemente para armazenar endereços de referência de objetos.

De modo semelhante á classe Set, a ECMAScript 2015 contém igualmente uma implementação da classe Map, também conhecida como dicionário.
De modo semelhante á classe Set, também armazenaremos os elementos da classe Dictionary em uma instância de Object.

O JavaScript nos permite acessar a propiedade de um objeto usando colchetes ([]), passando o nome da propiedade como posição. É por isso que ele é chamado de array associativo!

Não podemos simplesmente usar a instrução for-in e iterar pelas propiedades do objeto table. Precisamos usar também o método hasKey, pois o protótipo do objeto contém propiedades adicionais.
As propiedades são herdadas da classe-base Object de JavaScript, mas o objeto continua tendo propiedades que não são de nosso interesse nessa estrutura de dados.
