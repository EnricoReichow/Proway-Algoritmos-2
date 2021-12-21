//a classe Pessoa agrega tudo que foi identificado com comum entre as calsses Aluno, Professor...
class Pessoa {
    //esses atributos não precisam mais ser declarados em casa classe que herde de Pessoa
    nome
    idade
    altura
    salario
    //basta repassar os parametros dque vem no NEW para o construtor da SUPER CLASS
    constructor(nome, idade, altura, salario) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.salario = salario

    }
}

//o comando extende + nome da class, garante a herança de atributs e metodos da SUPER CLASSE
class Diretor extends Pessoa {
    //esse atributo só existe na classe de Diretor
    //não preciso informar nome e idade aqui
    qtdProfessores

    //o construtor tem o objetivo de preencher os valores antes de gerar um objeto do tipo Diretor
    //por isso preciso informar nome e idade no NEW porém devo repassar esses valores para o construtor
    //da super class ou CLASS PAI
    constructor(nome, idade, qtdProfessores) {
        super(nome, idade)
        this.qtdProfessores = qtdProfessores
        //os atributos herdados repasso para o construtor da SUPER CLASS
    }
}

class Aluno extends Pessoa {
    //atributos da class Aluno
    //nome
    //idade
    matricula

    //Construtor utilizado no new que recebe os parametros para inicializar
    //os atributos no novo objeto do tipo Aluno
    constructor(nome, idade, matricula) {
        super(nome, idade)
        //para cada parametro inicializo respectivamente o atributo do objeto
        // o (this.) é utilizado para identificar que o atributo é do objeto
        //isso ajuda a não confundir parametro com atributo

        this.matricula = matricula
    }
    meApresentar() {
        return "Olá meu nome é " + this.nome + " tenho " + this.idade + " anos e minha matricula é " + this.matricula
    }
}
class Professor extends Pessoa {

    qtdAlunos

    constructor(nome, idade, qtdAlunos, altura, salario) {
        super(nome, idade, altura, salario)
        this.qtdAlunos = qtdAlunos
    }
    meApresentar() {
        return "Olá meu nome é " + this.nome + " tenho " + this.idade + " anos e dou aula para " + this.qtdAlunos + " alunos."
    }
}


let teacher1 = new Professor("Rubem", 32, 15, 1.8, 2000)

console.log(teacher1);
console.log(teacher1.nome);
console.log(teacher1.idade);
console.log(teacher1.qtdAlunos);

let paulo = new Diretor("Paulo Tobias", 50, 32, 1.5, 1500)

console.log(paulo.nome);
console.log(paulo.idade);
console.log(paulo.qtdProfessores);
