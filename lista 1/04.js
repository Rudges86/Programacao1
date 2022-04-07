const entrada = require('prompt-sync')();
const a = parseFloat(entrada('Digite o primeiro número: '));
const b = parseFloat(entrada('Digite o segundo número: '));

if(a>b){
    console.log(`A diferença é de ${a-b}, o primeiro valor foi ${a} e o segundo foi ${b}`)
}else{
    console.log(`A diferença é de ${b-a}, o primeiro valor foi ${a} e o segundo foi ${b}`)
}