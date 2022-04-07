const entrada = require('prompt-sync')();
const n1 = entrada('Digite o nome: ')
const a = parseFloat(entrada('Digite a idade: '));
const n2 = entrada('Digite o nome: ')
const b = parseFloat(entrada('Digite a idade: '));
const n3 = entrada('Digite o nome: ')
const c = parseFloat(entrada('Digite a idade: '));

if(a > b && a > c){
    
    if(b > c){
        console.log(`${n1} mais velho(a) e ${n3} mais novo(a)`)
    }else{
        console.log(`${n1} mais velho(a) e ${n2} mais novo(a)`)
    }
    
}else if(b > a && b > c){
    if(c > a){
        console.log(`${n2} mais velho(a) e ${n1} mais novo(a)`)
    }else{
        console.log(`${n2} mais velho(a) e ${n3} mais novo(a)`)
    }
}else{
    if(a > b){
        console.log(`${n3} mais velho(a) e ${n2} mais novo(a)`)
    }else{
        console.log(`${n3} mais velho(a) e ${n1} mais novo(a)`)
    }
}
