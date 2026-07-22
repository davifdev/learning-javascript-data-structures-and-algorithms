// Há um tipo de dado que podemos usar para garantir que a propiedade seja private em uma classe, e ele se chama WeakMap. Ele é capaz de armazenar um par chave/valor, no qual a chave é um objeto e o valor pode ser um dado de qualquer tipo.
const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
}

const stack = new Stack();

// Agora sabemos que a propiedade items é realmente privada na classe Stack. Com essa abordagem, o código não é fácil de ler e não será possível herdar as propiedades que são private se estendermos essa classe
