console.log("Deu certo");

//aluno
//atributo = variaveis (5)
//nota = number
//idade number
//matricula
//senha
//nome = string
//
//metodos = funcoes sem o comando function
//conversa(ouviu) ---> return(resposta)
//responderChamada(professor) ---> " professor, MEU_NOME presente"
//me apresentar() ---> "Oi meu nome é NOME tenho XX anos minha matricula é XXXX"

class Aluno {
    nome
    idade
    matricula
    senha
    nota

    //declaração do construtor que sera chamado de forma externa 
    //para criar uma OBJETO da classe Aluno
    constructor(nome, idade, matricula, senha, nota) {
        //passando os valores do parametros para os meus atributos diferenciando com (THIS.)
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
        this.senha = senha
        this.nota = nota
    }

    conversar(ouviu) {
        return "Humm que interessante...(" + ouviu + ")"
    }
    chamarProfessor(mensagem) {
        return "Já resolveu era isso(" + mensagem + ")"
    }
    meApresentar() {
        return "Olá meu nome é " + this.nome +
            ", tenho " + this.idade + " anos meu numero de matricula é " + this.matricula +
            " e minha senha prefiro não expor, mesmo sendo um aluno nota " + this.nota
    }

}

let nome = "Enrico"

let aluno1 = new Aluno("Enrico", 17, 999, "E123#321", 10)

let alunoX = new Aluno("Spiderman", 20, 222, "TonyStark3", 8)

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);

console.log(aluno1.senha);

aluno1.nome = "Enrico Reichow"
console.log(aluno1);

alunoX.nome = "Peter Parker"
alunoX.idade = 22
alunoX.matricula = "002"
alunoX.senha = "789%231"
alunoX.nota = 9

console.log(alunoX);
console.log(alunoX.idade);

let colega = new Aluno("Joao Athur", 17, 666, "quelS2", 8)
colega.nome = "Joao Arthur"
colega.senha = "RaquelzinhaS2"
console.log(colega);

console.log(aluno1.conversar("Sobre o filme do Miranha"));

document.write(aluno1.conversar("Sobre o filme do miranha. Humm que interessante"))

let resposta = aluno1.conversar("Sobre o filme do miranha")

console.log(resposta);

console.log(alunoX.conversar("Nada a declarar"));

//como eu crio um objeto da class Aluno
//instanciando um objeto da class Aluno com os valores dos atributos passados no construtor
let aluno2 = new Aluno("Derik", 23, "9090", "ehoDerikk", 2)

//como eu acesso cada atributo do objeto? (var no minimo 3)
console.log("Olá meu nome é " + aluno2.nome);
document.writeln("Oi eu tenho" + aluno2.idade + "anos")
let variavel = aluno2.matricula

//como eu atualizo o atributo de um objeto? (atualizar 3 atributos)
aluno2.nome = "Deddy"
aluno2.idade = 29
aluno2.senha = "eHoDeDdY"

console.log(aluno2);

//executando metodos de um objeto da class Aluno
console.log(aluno2.conversar("Aprendi orientação a objetos"));

console.log(aluno2.chamarProfessor("erro na linha 64"));

console.log(alunoX.meApresentar());
console.log(aluno1.meApresentar());
console.log(aluno2.meApresentar());

