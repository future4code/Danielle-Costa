/*
console.log("Palvan")

// EXERCICIO 04
const idade = prompt("Qual é a sua idade")
const comparacao = Number(idade) 
if (idade >=18){
console.log('Você pode dirigir')
}else{
    console.log('Você não pode dirigir')
}//exercicio para validação de idade para dirigir


//EXERCICIO 5

const periodo = prompt('Escolha o periodo que você estuda: M manhã, V tarde e N noite')

if(periodo === 'M') {
      console.log('Bom dia')
}
else if(periodo === 'V'){
    console.log('Boa tarde')
}
else if(periodo === 'N'){
    console.log('Boa noite')
}
else{
    ('Digite um periodo valido')
} // exercicio para validação do periodo que estuda manha, atarde ou noite feito com if e else if


//EXERCICIO 6
const periodo1 = prompt('Escolha o periodo que você estuda: M manhã, V tarde e N noite')

switch(periodo1){
case('M'):
console.log('Bom dia')
break
case('V'):
console.log('Boa tarde')
break
case('N'):
console.log('Boa noite')
break
default:
    console.log('Digite um periodo valido')
}//exercicio para validação do periodo que estuda manha, atarde ou noite feito com switch case


//EXERCICIO 7

const genero = ("Fantasia ")
const preco  = 20

if(genero && preco <= 15) {
    console.log('Vamos ao cinema')
}else {
    console.log("Vamos ficar em casa")
} // exercicio para determinar se os amigos vão ao cinema com menos de 15 reais para assistir fantasia


//DESAFIOS
//DESAFIO 01

const gen = ("Fantasia")
const valor  = 12

switch(gen, valor ){
    case('Fantasia' && valor < 15):
    console.log('Bom dia')
    break
default:
    console.log('Vamos ficar em casa')
} //ESTOU COM DUVIDA, VOLTO DEPOIS
*/

//DESAFIO 02

const Nome = prompt('Digite seu nome Completo')
const tipoJogo = prompt['Internacionais IN ou Domesticos DO']
const etapa = prompt['Semi-Final SF, Decisão de Terceiro DT e Final FI']
const categoria = prompt[1, 2, 3, 4]
const quantidade = prompt('Digite a quantidade de ingressos que você deseja comprar')
let valor

if('SF' && categoria === 1){
    quantidade * 1320
    console.log("Nome do cliente " + Nome)
    console.log("Tipo de jogo " + tipoJogo )
    console.log('Etapa do jogo' + etapa)
    console.log('Categoria ' + categoria)
    console.log('Quantidade de ingressos' + quantidade)
}