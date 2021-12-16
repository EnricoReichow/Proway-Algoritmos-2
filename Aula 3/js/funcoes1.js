console.log("Deu certo");

meApresentar()//chamada de função

let nome = capturaTexto("Informe seu nome") //usando a função captura texto passando o parametro frase
let idade = capturaNumeroEspecial("Informe sua idade") //
let anoAtual = capturaNumeroEspecial("Informe o ano atual")
let cidade = capturaTexto("Informe sua cidade")

console.log("Então seu nome é " +nome+ " você tem " +idade+ " anos e está no ano de " +anoAtual+ " parece que você está em " +cidade +" e vive na Terra");

console.log("Quero saber o retorno dessa função " + retorneInteiro());


//declaração da função
//tem palavra reservada functiom
//tem nome da função
//() gaveta de parametros
//{} tudo que será executado
//conteudo que eu quero executar
function meApresentar() {
    let nome = "Enrico"
    let idade = 17

    console.log("Oi meu nome é " + nome + " e tenho " + idade + " anos");
}

function retornoSimples(){
    return "Ta aqui o que você precisa"
}

function retorneInteiro(){
    return 14
}

//quando eu camo essa funlçao devo informar um valor para esse parametro
function capturaTexto(texto){
    let temporario = prompt(texto)
    return temporario
}

//nao preciso passar parametros pois não tem
function capturaNumero(){
    let temporario = Number(prompt("Informe sua idade"))
    return temporario
}

//essa função recebe parametro onde a função capturaNumero não recebia
function capturaNumeroEspecial(frase){
    let temporario = Number(prompt(frase))
    return temporario
}

