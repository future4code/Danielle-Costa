
// EXERCICIO 1

const idade = prompt("Qual é a sua idade")
const idadeAmigo = prompt("Qual idade do seu melhor amigo?")
const comparacao = Number(idade) > Number(idadeAmigo)
console.log(comparacao)

//EXERCICIO 2

const par = prompt("Digite um numero par...")
const divisao = Number(par) / 2
console.log(divisao) //NUMEROS PARES DIVIDOS POR 2 NÃO SOBRA RESTO E NUMERO IMPAR O RESULTADO TEM (.)


//EXERCICIO 3

let listaDeTarefas = [] ;

listaDeTarefas[0] = window.prompt("O que voce faz de manha?")
listaDeTarefas[1] = window.prompt("O que voce faz de tarde?")
listaDeTarefas[2] = window.prompt("O que voce faz a noite?")
console.log(listaDeTarefas)
let jafez =  prompt("Qual tarefa voce ja fez? 0 1 2" )
Number(jafez)
listaDeTarefas.splice(jafez, 1)
console.log(listaDeTarefas)






//EXERCICIO 4

let email = prompt("digite seu email")
console.log("o email " + email + " foi cadastrado com sucesso")


//DESAFIO 1

let celcius = 0
let faren   = 0
let kelvin = (faren - 32 ) * 5

//A
let calc1 = (77 - 32) * 5
console.log(calc1)

//B
let calc2 = (80 - 32) * 5
console.log(calc2)

//C
let calc3 = (30 -32) * 5
console.log(calc3 + "  30 F")



//DESAFIO 2
let qh = 0.05
calc4 = prompt("digite quantos quilowatt você gastou este mês" )
console.log(qh * Number(calc4))
calc5 = 280 * 0.05
console.log(calc5)
calc6 = (calc5) * 0.015 
console.log(calc5 - calc6)



//DESAFIO 3 A
let libra = 0.45320 
calc7 =  libra * 20
console.log("20lb equivalem a " + calc7 + " kg")


//DESAFIO 3 B
let once = 0.02834
calc8 = once * 10.5
console.log("10.5oz equivalem a "+ calc8  + " Kg")

//DESAFIO 3 C
let milha = 1609.34
calcm = milha * 100
console.log("100mi equivalem a "+ calcm + " m")

//DESAFIO 3 D
ft = 0.3048
calc9 = ft * 50
console.log(" 50ft equivalem a " + calc9 + " m")

//DESAFIO 3 E
gal = 3.785
calc10 = gal * 103.56
console.log("103.56 gal quivalem a " + calc10 + "  litros")

//DESAFIO 3 F
xic = 0.250
calc11 = xic * 450
console.log("450 xicaras equivalem a " + calc11 + "  litros")

//DESAFIO 3 G
xic = 0.250
digi = prompt("Faça a conversão de xicaras para litros")
calc12 = digi * xic  
console.log(digi + " xicaras equivalem a " + calc12 + "  litros")
