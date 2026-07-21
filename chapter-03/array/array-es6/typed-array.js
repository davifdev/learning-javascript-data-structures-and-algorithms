// Podemos armazenar qualquer tipo de dado em arrays JavaScrit. Isso se deve ao fato de os arrays em JavaScript não serem fortemente tipados.
// TypedArray foi criado para que pudéssemos trabalhar com arrays contendo um único tipo de dado.
let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for (let i = 0; i < length; i++) {
  int16[i] = i + 1;
}

console.log(int16);

// Arrays tipados são ótimos para trabalhar com APIs WebGL, manipular bits e lidar com arquivos e imagens.
