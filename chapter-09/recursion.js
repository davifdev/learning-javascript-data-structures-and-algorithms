// Um método ou função será recursivo se ele puder chamar a si mesmo diretamente, assim.
function recursiveFunction(someParam) {
  recursiveFunction(someParam);
}

// Uma função também é chamada de recursiva se puder chamara a si mesma indiretamente, desta maneira.
function recursiveFunction1(someParam) {
  recursiveFunction2();
}

function recursiveFunction2(someParam) {
  recursiveFunction1();
}
