let nome = "Enrico" // variavel do tipo string
let idade = 17 // variavel do tipo numbe
let distanciaProway = 0.3 // variavel do tipo number


console.log("Olá meu nome é", nome, "e tenho", idade, "anos e moro a", distanciaProway, "km de distancia");

//let bairro = prompt("Informe o seu bairro:")

//alert(bairro)

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

if (idade < 15) {
    console.log("Você é criança");
} else {
    console.log("Você é adolescente"); //trabalhando maior menor e igual
}


console.log("Escolha uma opção");
console.log("1 - Primavera");
console.log("2 - Verão");
console.log("3 - Outono");
console.log("4 - Inverno");
let opcao = 1

switch (opcao) {
    case 1:
        console.log("Você escolheu a primavera");
        break
    case 2:
        console.log("Você escolheu verão");
        break
    case 3:
        console.log("Você escolheu o outono");
        break
    case 4:
        console.log("Você escolheu o inverno");
        break
    default:
        console.log("Você não escolehu nada");
        break

}

let quantidade = 15

for (let contador = 1; contador <= quantidade; contador++) {
    console.log("Repetindo pela", contador, "X");
}

for (let variavel = 1; variavel <= 5; variavel++) {
    console.log("Repetindo dnv pela", variavel, "X");
}

// let resposta
// do {
//     resposta = prompt("Tinha dois dogs, Pita e Repita, Pita morreu, sobrou?")
// } while (resposta == "repita");

