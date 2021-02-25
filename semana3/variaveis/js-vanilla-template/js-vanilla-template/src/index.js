//EXERCICIO 01 
a = 10
b = 10

console.log(b)  //10

b = 5
console.log(a, b) // 10 , 5

//EXERCICIO 02

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c) // 10 10 10

//EXERCICIO PARA ESCRITA DE CODIGO
// EXERCICIO 01

let nome    ;
let idade   ;
console.log (typeof nome) //undefined
console.log (typeof idade) /*undefined pois não foi atribuido nada, nem numero para ser considerado
number ou texto para ser considerado string*/
nome = window.prompt ("Qual seu nome? ")
idade = window.prompt("Qual sua idade? ")
console.log("Olá " + nome + " sua idade é " + idade)

//EXERCICIO 02

let endereco  ;
let cor ;
let pet ;
let comida ;
let bebida ;
endereco = window.prompt("Qual é o seu endereço?")
console.log("Olá seu endereço é " + endereco)

cor = window.prompt("Qual é a sua cor favorita?")
console.log("Olá sua cor favorita é " + cor)

pet = window.prompt("Qual é o seu pet favorito?")
console.log("Olá seu pet favorito é " + pet)

comida = window.prompt("qual é a sua comida favorita?")
console.log("Olá seu comida favorita é " + comida)

bebida = window.prompt("qual é a sua bebida favorita?")
console.log("Olá sua bebida favorita é " +  bebida )

//EXERCICIO 03

let foods = ['ovo', 'pizza', 'sorvete', 'x-hamburguer', 'feijoada']
console.log ("Olá minhas comidas favoritas são: ")  
console.log (foods[0])
console.log (foods[1])
console.log (foods[2])
console.log (foods[3])
console.log (foods[4])
foods[1] = window.prompt("Qual é a sua comida favorita?")
console.log (foods)

//EXERCICIO 4

let perguntas = ['Você é brasileiro?', 'Você vive em SP?', 'Você gosta de batata? ']
let respostas = [true, false, true]
console.log (perguntas[0], respostas[0])
console.log (perguntas[1], respostas[1])
console.log (perguntas[2], respostas[2])