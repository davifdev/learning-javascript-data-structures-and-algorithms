# Lista ligada circular

Uma lista ligada circular pode ter apenas uma direção de referência (como na lista ligada) ou uma referência dupla (como na lista duplamente ligada).

A única diferença entre uma lista ligada circular e uma lista ligada é que o ponteiro para o próximo item do último elemento (tail.next) não faz uma referência a undefined, mas ao primeiro elemento (head).

Em uma lista circular duplamente ligada, tail.next aponta para o elemento head e head.prev aponta para o elemento tail
