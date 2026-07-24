As filas são estruturas de dados muito semelhante a pilha, mas em vez de obedecer os princípio do LIFO, elas usam um princípio diferente.
Os deques são, filas de duas pontas ou fila duplamente terminada.

Uma fila é uma coleção de elementos ordenada baseada em FIFO (First In First Out) também conhecinho como o princípio do first-come first-served (o primeiro a chegar é o primeiro a ser servido). A adição de novos elementos em uma fila é feita na cauda (tail), e a remoção, na frente.

Um exemplo muito conhecido em ciência da computação é a fila de impressão. Suponha que precisamos imprimir cinco documentos. Abrimos cada um dos documentos e clicamos no botão para imprimir. Cada um será enviado para a fila da impressora. O primeiro documento para qual solicitamos a impressão será impresso antes, e assim por diante, até que todos tenham sido impressos.

As classe Queue e Stack são muito parecidas. A única diferença está nos métodos dequeue e peek, que se deve a distinção entre os princípios FIFO e LIFO.

Quando abrimos uma nova aba no navegador, uma fila de tarefas é criada isso ocorre porque apenas uma única thread trata todas as tarefas de uma única aba, ela é chamada de laço de eventos (event loop). O navegador é responsável por várias tarefas, como renderizar o HTML, executar comandos com código JavaScript, tratar a interação com o usuário (entrada de usuário, cliques de mouse e assim por diante)
e executar e processar essas requisições assíncronas.
