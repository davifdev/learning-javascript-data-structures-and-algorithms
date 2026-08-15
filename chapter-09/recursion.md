## Entendendo a recursão

A recursão é um método para resolução de problemas que consiste em solucionar partes menores do mesmo problema até resolvermos o problema original, mais amplo. Em geral, ela envolve chamar a própia função.

Resolver um problema usando versões menores do própio problema até chegara a um caso simples que poderemos resolver diretamente.

A ECMAScript 2015 tem tail call optimization (otimização de chamadas finais, ou otimização de chamadas de cauda). Se uma chamada de função for a última ação em uma função, ela será tratada como um jump e não como uma subroutine, isso significa que o nosso código pode ser executado indefinidamente na ECMAScript 2015. Por isso é muito importante ter um caso de base para interromper a recursão.

A versão Interativa é muito mais rápida que as versões Recursivas, portanto isso significa que a recursão é mais lenta. A recursão é mais fácil de entender e em geral exige também menos código, em alguns algoritimos, a solução interativa pode não estar disponível, e, com a eliminação da chamada de cauda (tail call), a penalidade da recursão pode até desaparecer.
Usamos a recursão porque é mais fácil de resolver problemas com ela.
