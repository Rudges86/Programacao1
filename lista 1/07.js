const entrada = require('prompt-sync')();
const a  = parseFloat(entrada('Informe o número: '))
const b  = parseFloat(entrada('Informe o número: '))
const operacao  = entrada('Informe a operação (+,-,*,/): ')

switch(operacao){
    case '+':
        console.log(`${a+b}`)
        break;
    case '-':
        console.log(`${a-b}`)
        break;
    case '*':
        console.log(`${a*b}`)
        break;
    case '/':
        console.log(`${a/b.toFixed(2)}`)
        break;
    default:
        console.log('Inválido')
}