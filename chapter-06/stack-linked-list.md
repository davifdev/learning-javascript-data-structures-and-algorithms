# StackLinkedList

Também podemos usar a classe LinkedList e suas variantes como estrutura de dados internas a fim de criar outras estruturas de dados como pilha, fila e deque.

Na classe StackLinkedList, em vez de usar um array ou um objeto JavaScript para armazenar items, usamos uma DoublyLinkedList. O motivo para usar uma lista duplamente ligada no lugar de uma lista ligada, é que para a pilha, os elementos serão inseridos no final da lista e a remoção também será no final. Nossa classe DoublyLinkedList mantém uma referência ao último element da lista (tail), portanto não pe necessário iterar por todos os elementos da lista para acessá-lo; há um acesso direto ao primeiro e ao último elementos, reduzindo o esforço de processamento e mantendo o custo em O(1), como na implementação original da Stack.
