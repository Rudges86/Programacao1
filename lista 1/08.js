const entrada = require('prompt-sync')();
const aluno = entrada('Digite o nome do aluno: ')
let soma = 0
for(let x = 0 ; x < 4; x++ ){
    const nota = parseFloat(entrada(`Digite a nota ${x + 1 }: `))
    soma += nota;
}

const media = soma/4

if(media >= 7){
    console.log(`Aprovado com média ${media}`)
}else if(media < 7 && media > 5){
    console.log(`Recuperação com média ${media}`)
}else{
    console.log("Reprovado")
}