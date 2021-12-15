/* 

solicite uma quantidade definida de numeros a serem 
capturados, para captura deve verificar qual o maior numero
e o menor numero

após a captura dos numeros exibir o maior o menor e a media 
geral desses numeros

*/

let soma
let menor
let maior
let media
let numero

let quantidade = Number(prompt("Informe quantos numeros serão capturados:"))

for (contador = 1; contador <= quantidade; contador++) {
    let num = Number(prompt("Informe o " + contador + "o numero"))
    if (contador == 1) {
        maior = numero
        menor = numero
    } else {
        if (numero < menor) {
        } menor = numero
        if (numero > maior) {
            maior = numero
        }
    }


}

media=soma/quantidade
alert("Menor "+menor)
alert("Maior "+maior)
alert("Media "+media)



