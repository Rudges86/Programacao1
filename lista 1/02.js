const entrada = require('prompt-sync')();
const a = parseFloat(entrada('Digite o valor da base: '));
const b = parseFloat(entrada('Digite o valor da altura: '));

console.log(`Área: ${(a*b)}`)