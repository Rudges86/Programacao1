const entrada = require('prompt-sync')();
const saldoMedio = parseFloat(entrada('Digite o valor da base: '));
if(saldoMedio > 0 && saldoMedio <= 200){
    console.log('Nenhum crédito');
}else if(saldoMedio > 200 && saldoMedio <= 400){
    console.log(`Liberado R$ ${saldoMedio*0.2}, que corresponde a 20% do valor`)
}else if(saldoMedio > 400 && saldoMedio <= 600){
    console.log(`Liberado R$ ${saldoMedio*0.3}, que corresponde a 30% do valor`)
}else{
    console.log(`Liberado R$ ${saldoMedio*0.4}, que corresponde a 40% do valor`)
}