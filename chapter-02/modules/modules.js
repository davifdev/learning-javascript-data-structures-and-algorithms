// A ES2015 Introduziu uma funcionalidade oficial de módulo
// Antes usavamos require(CommomJS)
// Existe um padrão JavaScript popular para módulos chamado AMD(Asynchronous Module Definition) O RequireJS é a implementação mais conhecida de AMD.
/*
O RequireJS implementa o padrão AMD (Asynchronous Module Definition), que foi projetado especificamente para navegadores, carregando arquivos de forma assíncrona. O CommonJS usa carregamento síncrono e é o sistema padrão do Node.js
*/
import * as area from "./calc-area.js";

console.log(area.circleArea(2));
console.log(area.squareArea(4));
