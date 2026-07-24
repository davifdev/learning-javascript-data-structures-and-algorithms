A estrutura de dados de deque também conhecida como fila de duas pontas (double-ended queue) é uma fila especial que nos permite inserir e remover elementos do final ou da frente da fila.

Em ciência da computação, uma aplicação comum de um deque é na armazenagem de uma lista de operações para desfazer ações (undo).

Sempre que um usuário executar uma operação no software, um push dessa operação será feito no deque, (exatamente como em uma pilha). Quando o usuário clicar em um botão Undo, uma operação de pop será efetuada no deque, oque significa que essa operação será removida do final. Depois de um número predefinido de operações, as operações mais antigas serão removidas da frente do deque. Como o deque implementa tanto os princípios de FIFO e LIFO, podemos dizer também que o deque combina as estruturas de dados de fila e de pilha.
