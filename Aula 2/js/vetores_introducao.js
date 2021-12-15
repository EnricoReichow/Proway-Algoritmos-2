console.log("Deu certo");

let nomes = [] //criando um vetor sem itens

console.log(nomes);

//criando um vetor ja com itens
let cursos = [
    "Algortimos 1",
    "Algortimos 2",
    "Java Fundamentos",
    "Desenvolvimento em java",
    "Javascript Avançado",
    "MySQL",
    "Typescript",
    "Fundamentos CSS"
]

console.log(cursos);

console.log(cursos[5]);//acessando o valor no index 5, lembrando que começa com 0
console.log(cursos.indexOf("Desenvolvimento em java"));

console.log(cursos.indexOf("Typescript"));

cursos.splice(4, 3)
//para deletar um item na lista dar a posição e quantos 
//itens deletar

console.log(cursos);


cursos.push("Pyton") //inserindo item no final da lista
cursos.push("Angular")//inserindo item no final da lista

console.log(cursos);

//iniciando o contador com zero pois o indice na lista começa come zero
//enquanto for menor que o tamanho da lista, ou seja tamanho -1
//incremento de 1 em 1
for (let contador = 0;contador < cursos.length;contador++) {
    //acessando o vlor de cursos na posicação [contador]
    console.log("Na posição " +contador+ " tem o valor = " +cursos[contador]);
}
console.log("=======================================");
for(let contador = 1; contaodr <= cursos.length; contador ++){
    //ajustando o acesso ao valor para localizar o indice correto,
    //pois começa com 0
    //se eu inicio com 1 eu estaria pulando o primeiro item e acesso um item extra que nao existe
    console.log("Na posição " +contador+ " tem o valor = " + cursos[contador - 1]);
}