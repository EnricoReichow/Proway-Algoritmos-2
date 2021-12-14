/*
criar variaveis para o nome do aluno, as 3 notas e calcular 
media podem usar 3 variaveis para as notas OU usar repetição
para a quantidade de notas
*/

console.log("Programa de calculo de media com 3 variaveis");

let nome = prompt("Informe seu nome:")
// let nota1 = Number(prompt("Informe sua primeira nota: " + nome))
// let nota2 = Number(prompt("Informe sua segunda nota: " + nome))
// let nota3 = Number(prompt("Informe sua terceira nota: " + nome))

// let media = (nota1 + nota2 + nota3) / 3

// if (media >= 7) {
//     console.log("Você está aprovado com media:", media);
// } else {
//     console.log("Você está reprovado ou em exame com media:", media);
// }

let qtdNota
let nota
let soma

qtdNota = Number(prompt("Informe quantas nota deseja capturar"))

//variavel temporaria com ponto de partida
//condição de permanencia
//incremento ou descremento
soma = 0
for (let contador = 1; contador <= qtdNota; contador++) {
    nota = Number(prompt("Informe a " + contador + "ª nota do aluno " + nome))
    soma += nota
}

let media = (soma) / qtdNota

if (media >= 7) {
    alert("Você está aprovado com media: " + media);
} else {
    alert("Você está reprovado ou em exame com media: " + media);
}