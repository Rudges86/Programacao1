const entrada = require('prompt-sync')();
const nome = entrada('Digite o seu nome: ')
const dataDeNasc = entrada('Digite a sua data de nascimento (ex: 08/05/1970): ')

if(dataDeNasc.indexOf('/') != -1 && dataDeNasc.length == 8){
    //Quebrando a string em um array
    let data = dataDeNasc.split("/")
    //Pegando a data atual do sistema
    const datas = new Date()
    //Diminuindo o ano atual pelo ano digitado
    const ano = data[2]
    const idade = Math.abs(datas.getFullYear() - ano);
    console.log(`${nome} você tem ${idade}`)
}else{
    console.log('Data digitada inválida, veja se foi digitado de acordo com o exemplo.')
}



