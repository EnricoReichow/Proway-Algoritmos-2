console.log("Deu certo exercicio 2 cupinxa");

document.write("Que legal!")
document.write("<br> Criar um vetor de numeros, e solicitar do usuario uma quantidade de numeros")
document.write("<br> conforme a quantidade repetir a captura numero a numero até a acabar o laço")
document.write("<br> depois que o laço acabar, percorrer a lista e determinar qual o maior e o menor numero")

let numeros = []
let quantidade
let numero

quantidade = Number(prompt("Informe quantos numero deseja capturar"))

for (let contador = 1; contador <= quantidade; contador++) {
    numero = Number(prompt("Informar o " + contador + "ª numero"))
    numeros.push(numero)
}
console.log(numeros);

let menor
let maior

for (let contador = 0; contador < numeros.length; contador++) {
    if (contador == 0) {
        menor = numeros[contador]
        maior = numeros[contador]
    } else {

        if (numeros[contador] < menor) {
            menor = numeros[contador]

        }
        if (numeros[contador] > maior) {
            maior = numeros[contador]

        }
    }
}
document.write("<br> O maior numero informado foi " + maior + " e o menor foi " + menor);