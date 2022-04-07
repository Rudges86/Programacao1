const entrada = require('prompt-sync')();
const f = parseFloat(entrada('Digite a temperatura em Farenheit: '));

const c = (f-32)/1.8

console.log(`A temperatura em Celsius é de ${c}°C`)
