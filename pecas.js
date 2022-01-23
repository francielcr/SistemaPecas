// Variáveis, são espaços na memória para guardar algum valor
let pesoPeca = 50

if(pesoPeca > 100){
    console.log ("Peso maior que 100 g, logo, podemos cadastrar!!!")
}else{
    console.log ("Peso insuficiente, não é possível cadastrar.")
}

let numeroPecas = 10
if (numeroPecas < 10){
    console.log("Ainda  há espaço na caixa, podemos cadastrar a peça")
} else{
    console.log(" Não há espaço disponível na caixa")
}

let nomePeca = "Disco de Freio"
console.log("O comprimento do nome da peca é: ", nomePeca.length)
if(nomePeca.length < 3){
    console.log("Nome de peça muito curto, não é possível cadastrar")
} else{
    console.log("Nome da peca adequado, podemos cadastrar")
}