//exercicio 04
/*
let sobreMim = (array) => {
    for (juncao of array){ 
        console.log(juncao)
     } 
     return array.lenght
}
const arraySouEU = ["Danielle", "39", "Praia Grande", "Programadora"]
const eu = sobreMim(arraySouEU)
console.log(`Meu nome é ${arraySouEU[0]} , tenho ${arraySouEU[1]} moro na cidade ${arraySouEU[2]} e sou ${arraySouEU[3]}`)

// EXERCICIO 4B
let arraySouEU = ['nome', 'idade', 'cidade', 'estudante']
arraySouEU[0] = prompt("Qual é o seu nome?")
arraySouEU[1] = prompt("Qual é a sua idade?")
arraySouEU[2] = prompt("Qual cidade você mora?")
arraySouEU[3] = confirm("Você é estudante?")
if (confirm = true){
    arraySouEU[3] = "Sou estudante"
} else {
    arraySouEU[3] = "Não sou estudante"
}
let sobreMim = (array) => {
    for (juncao of array){ 
        console.log(juncao)
     } 
     return array.lenght
}

const eu = sobreMim(arraySouEU)
console.log(`Meu nome é ${arraySouEU[0]} , tenho ${arraySouEU[1]} moro na cidade ${arraySouEU[2]} e sou ${arraySouEU[3]}`)
*/
//EXERCICIO 05
/*
function somaNum(val1, val2){
const soma = val1 + val2
console.log(soma)
}

 somaNum(15, 23)

let numeros = []
numeros[0] = Number(prompt("digite um valor"))
numeros[1] = Number(prompt("digite outro numero"))

if (numeros[0] > numeros[1]){
    console.log("Maior")
}else if (numeros[0] == numeros[1]){
    console.log("Iguais")
}

const mensagem = prompt("Digite uma mensagem")

for(let i = 0; i <= 10; i++){
    console.log(mensagem)
}
 */
//EXERCICIO 06A
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
/*function contaArray(lista) {
    for(let item of lista){
        console.log(item)
    }
    return lista.length
}
console.log(contaArray(array))

//EXERCICIO 06B
function validaPar(num) {
    return num % 2 === 0
}
console.log("verifica se é par", validaPar(8))

*/
//EXERCICIO 06C
function verificaPar (arrayNumeros){
    let pares = []
    for(const num of arrayNumeros){
        if (num % 2 === 0){
            pares.push(num)
        }
    } return pares.length
}
console.log(verificaPar(array))
/*
//EXERCICIO 06D
function validaPar (arrayNumeros){
    let pares = []
    for(const num of arrayNumeros){
        if (num % 2 === 0){
            pares.push(num)
        }
    } return pares.length
}
console.log(validaPar(array))
*/
function validaPar2 (arrayNumeros){
    let pares = []
    for(const num of arrayNumeros){
        if (verificaPar(num)){
            pares.push(num)
        }
    } return pares.length
}
console.log(validaPar2(array));

