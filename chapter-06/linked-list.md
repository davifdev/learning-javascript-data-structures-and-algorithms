Uma lista ligada é uma estrutura de dados dinâmica; isso significa que podemos adicionar ou remover itens do modo que quisermos e ela aumentará conforme for necessário.

Na maioria das linguagens o array ele possui um tamanho fixo, inserir ou remover elementos do início ou do meio do array é custoso. pois os elementos têm de sofrer um deslocamento.
Internamente é isso que acontece com os métodos JavaScript também

As listas ligadas armazenam uma coleção sequencial de elementos; no entanto, de modo diferente dos arrays, nas listas ligadas os elementos não são posicionados de forma contígua na memória. Cada elemento é constituído de um nó que armazena o elemento propiamente dito, além de uma referência (conhecida como ponteiro ou ligação) que aponta para o próximo elemento. Essa e strutura permite que a lista se mantenha dinâmica, permitindo a inserção e remoção de elementos sem a necessidade de reorganizar todos os dados da estrutura.

Uma das vantanges de uma lista ligada em relação a um array convecional é que não é necessário deslocar os elementos quando eles são adicionados ou removidos.
Se quisermos acessar um elemento no meio será necessário partir do início (head) e iterar pela lista até encontrarmos o elemento desejado.
