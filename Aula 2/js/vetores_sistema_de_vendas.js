//precisamos catologar todos os veiculos e seus valores
//para isso precisamos de 2 vetores um para os nomes e outro para os valores 
//cada posição será respectivamente nome e valor
//a quantidade de veiculos é indefinida até que informe que não deseja continuar com o cadastro
//após o cadastro exibir o nome e valor do primeiro veiculo e do ultimo

//primeiro é lista [0]
//ultimo lista [lista.length-1]

let nomes = []
let valores = []
let nome
let valor
let resposta

do {
    nome = prompt("Informe o nome do veiculo")
    nomes.push(nome)

    valor = Number(prompt("Informe o valor do veiculo " + nome))
    valores.push(valor)

    resposta = prompt("Deseja continuar S/N ?")
} while (resposta == "S" || resposta == "s")

document.write("O primeiro veiculo foi " + nomes[0] + " e o valor dele R$ " + valores[0])
document.write("<br>O ultimo veiculo foi " + nomes[nomes.length - 1] + " e o valor dele R$ " + valores[nomes.length - 1])