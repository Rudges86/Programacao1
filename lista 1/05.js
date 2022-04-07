const entrada = require('prompt-sync')();
const a = parseFloat(entrada('Digite o primeiro número: '));
const b = parseFloat(entrada('Digite o segundo número: '));
const c = parseFloat(entrada('Digite o terceiro número: '));

if(a > b && a > c){
    console.log(`O primeiro valor é o maior ${a}`)
}else if( a < b && b > c){
    console.log(`O segundo valor é o maior ${b}`)
}else{
    console.log(`O terceiro valor é o maior ${c}`)
}

