

function capturarNumero(acao) {

    let nA = promptNumero("Informe o primeiro numero")
    let nB = promptNumero("Informe o segundo numero")

    //para escolher em switch as operações
    switch (acao) {
        case "somar":
            somar(nA, nB)
            break
        case "subtração":
            subtrair(nA, nB)
            break
        case "divisão":
            dividir(nA, nB)
            break
        case "multiplicação":
            multiplicar(nA, nB)
            break

        default:
            console.log("Não fazer nada");
            break

    }

}

function promptNumero(frase) {

    let temporario = Number(prompt(frase))
    return temporario
}

function somar(numeroA, numeroB) {
    alert(numeroA + numeroB)
}

function subtrair(numeroA, numeroB) {
    alert(numeroA - numeroB)
}

function dividir(numeroA, numeroB) {
    alert(numeroA / numeroB)
}

function multiplicar(numeroA, numeroB) {
    alert(numeroA * numeroB)
}
