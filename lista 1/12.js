const entrada = require('prompt-sync')();
const n1 = parseFloat(entrada('Digite a primeira nota: '));
const n2 = parseFloat(entrada('Digite a segunda nota: '));
const n3 = parseFloat(entrada('Digite a terceira nota: '));


function media(n,n2,n3){
    let media = (n * 2.5 + n2 * 3.5 + n3 * 4)/(2.5+3.5+4)
    return media.toFixed(2)
}
console.log(media(n1,n2,n3))