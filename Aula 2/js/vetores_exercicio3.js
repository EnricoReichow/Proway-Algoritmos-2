//criar um vetor vazia para solicitar do usuario frases aleatorias
//repetir essa captura até que o usuario digite ""
//para cada repetição escrever em tela a frase aleatoria capturada

let frases = []
let frase

do {
    frase = prompt("Escreva uma frase")

    document.write("<br>" + frase)

} while (frase != "")

