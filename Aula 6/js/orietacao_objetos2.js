//criar uma classe professor
//nome string
//idade number
//qtdAlunos number

//metodos 
//fazerChamada que recebe por parametro o nome do aluno e retorna (presença verificada)
//calculaMedia recebe 3 nota e devolve a media 

//após criar a class instanciar 1 objeto da classe Professor para atribuir os valores 
//atualizar algum valor de atributo do professor
//utilizar os metodos do professor

class Professor {
    nome
    idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos) {
        this.nome = nome
        this.idade = idade
        this.qtdAlunos = qtdAlunos

    }
    fazerChamada(marcar) {
        return "<br>Marcado sua presença " + marcar 
    }
    calcularMedia(nota1,nota2,nota3) {
        return (nota1+nota2+nota3) / 3
    }
}

let professor1 = new Professor("Rubem", 32, 14)

professor1.qtdAlunos = 12

console.log(professor1);

document.writeln(professor1.fazerChamada("obrigado por não me deixar no vácuo."));

let media = professor1.calcularMedia(5,7,10)

document.writeln("<br>"+media)

//instanciar outro professor e utilizar seus atributos e metodos
//ler valores separadamente
//atualizar valores e ver o ANTES e DEPOIS
//fazer mais de uma chamada 
//calcular mais de uma MEDIA

let professor2 = new Professor("César",54,42)
console.log(professor2.nome);
console.log(professor2.idade);
console.log(professor2.qtdAlunos);

professor2.qtdAlunos = 44
console.log("qtd DEPOIS' "+professor2.qtdAlunos);

document.writeln(professor1.fazerChamada("Murilo"))
document.writeln(professor1.fazerChamada("Italo"))

console.log(professor2.calcularMedia(7,7,7))
console.log(professor2.calcularMedia(7,5,7))
console.log(professor2.calcularMedia(5,6,7))







