console.log("Criar um vetor de gostos pessoais");
console.log("Pode criar o vetor ja com valores ou não");
console.log("Se não tiver valores usar o push para incluir item a item");

console.log("Exibir a lista com LOG");
console.log("Percorrer a lista para apresentar a cada valor uma frase");

//criação de vetor de gostos
let gostos  = [
    "Cantar",
    "Ir às comprar",
    "Dancar"
]

//usando o push inclui um item na lista
gostos.push("Jogar videogame")
gostos.push("Estudar")

//exibir em log como esta a variavel gostos
console.log(gostos);

//percorrendo o vetor de 0 atpe a lista -1
//de 1 em 1
for (let contador = 0;contador < gostos.length;contador++) {
    console.log("Gosto muito de " +gostos[contador]);
}

console.log(gostos[0]);
console.log("O que eu gosto mais é " +gostos[3]);
