//criar uma class calculadora com os atributos numeroA e numero
//criar os metodos somar, subtrair, multiplicar, dividir,
//capturarNumeros todos recebem por parametros o valor de A e B

//esses metodos serao chamados por botoes no html usando onclick="nomeDaFuncao()"

class Calculadora {
    numeroA
    numeroB

    constructor(numeroA, numeroB) {
        this.numeroA = numeroA
        this.numeroB = numeroB

        
    }

    capturarNumeros(nA, nB, operacao) {
        this.numeroA = nA
        this.numeroB = nB

        switch (operacao) {
            case "somar":
                return this.somar()
                break;
            case "subtrair":
                return this.subtrair()
                break
            case "multiplicar":
                return this.multiplicar()
                break
            case "dividir":
                return this.subtrair()
                break
        }
    }
    somar() {
        return this.numeroA + this.numeroB
    }
    subtrair() {
        return this.numeroA - this.numeroB
    }
    multiplicar(){
        return this.numeroA * this.numeroB
    }
    dividir(){
        return this.numeroA / this.numeroB
    }

}

let calculadora = new Calculadora(1, 2)
console.log("A soma é " + calculadora.somar());
console.log("A subtração é " + calculadora.subtrair());
// console.log("A operação de soma é " + calculadora.capturarNumeros(5, 3, "somar"));
console.log("A multiplicação é " + calculadora.multiplicar());
console.log("A divisão é " + calculadora.dividir());


