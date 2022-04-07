const entrada = require('prompt-sync')();
const distribuidor = 0.28;
const impostos = 0.45;
const custoFabrica = parseFloat(entrada('Digite o custo de fábrica: '))
const valorFinal = custoFabrica + (custoFabrica * distribuidor) + (custoFabrica * impostos)
console.log(`O valor final para o consumidor é: R$ ${valorFinal}`)