// O TypeScript tem um modificador private para as propiedades e métodos de classe. No entanto esse modificador funciona somente em desenvolvimento como a verificação de tipos e de erro. Depois que o código é transpilado para JavaScript, o atributo será igualmente público.

// O fato é não é possível declarar propiedades ou métodos private como podemos fazer em outras linguagens de progamação. Há abordagens diferentes ao qual podemos alcançar o mesmo resultado.

// Foi adicionado ao JavaScript uma proposta para adicionar propiedades private em classes. Com essa proposta, podemos declarar campos de classes JavaScript diretamente no corpo da classe e inicializar as propiedades
class Stack {
  #count = 0;
  #items = 0;
}

const stack = new Stack();

// Podemos declarar propiedades private prefixando as propiedades com um símbolo (#). Esse comportamento é muito semelhante á privacidade dos atributos com WeakMap.
