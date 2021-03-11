
 const numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13];
 

//Exercício 1 
function inverteArray(array) {
  
  let arrayInvertido = []
  for(let i = array.length - 1; i >= 0; i-- ){
   arrayInvertido.push(array[i])
   }return arrayInvertido
}
console.log(inverteArray(numbers))

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   const paresElevadoDois = []
   for(const num of array){
      if (num %2 === 0){
         paresElevadoDois.push(num **2)
      }
   }return paresElevadoDois
}
console.log(retornaNumerosParesElevadosADois(numbers))
//Exercício 3

function retornaNumerosPares (array) {
   const numerosPares = []
   for(const num of array){
      if (num %2 ===0){
         numerosPares.push(num)
      }
   }return numerosPares
}
console.log(retornaNumerosPares(numbers))
//Exercício 4
function retornaMaiorNumero(array) {
   let MaiorNumero = array[0]
   for (let i = 0; i < array.length; i++){
      if(array[i] > MaiorNumero){
         MaiorNumero = array[i]
      }
   }return MaiorNumero
}
console.log(retornaMaiorNumero(numbers))
//Exercício 5

function retornaQuantidadeElementos (array) {
   let quantidadeElementos = array
   {

   }return quantidadeElementos.length
} 
console.log(retornaQuantidadeElementos(numbers))

//Exercício 6

function retornaExpressoesBooleanas(){
  const output = [false, false, true, true, true]
return output
} 
//Exercício 7
const novo = []
function retornaNNumerosPares(n) {
   for(let i = 0; i < n*2; i++){
      if (i %2 ===0){
         novo.push(i)
      }
   }return novo
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if(a !== b && a !== c){
   return'Escaleno'
  } else if(a===b && a===c ){
   return'Equilátero'
  } else {
   return'Isósceles'
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maiorNumero
   let menorNumero
   let maiorDivisivelporMenor

   if(num1 > num2){
      maiorNumero = num1
      menorNumero = num2
   } else  {
      maiorNumero = num2
      menorNumero = num1
   }

   maiorDivisivelporMenor = maiorNumero % menorNumero === 0;

   let diferenca = maiorNumero - menorNumero

   return {
      maiorNumero: maiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca: diferenca,
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   let menor = Infinity
   let maior = 0
   let segundoMenor = Infinity
   let segundoMaior = 0
   let indiceMenor = 0
   let indiceMaior = 0
   let novoArray = []

   for(let i of array){
      if (i < menor){
         menor=i
         indiceMenor = array.indexOf(menor)
      }
      if (i > maior){
         maior = i
         indiceMaior = array.indexOf(maior)
      }
   }
   array.splice(indiceMaior,1)
   array.splice(indiceMenor, 1)

   for (let i of array){
      if (i < segundoMenor){
         segundoMenor = i
      } if (i > segundoMaior){
         segundoMaior = i
      } 
   }
   novoArray.push(segundoMaior)
   novoArray.push(segundoMenor)
return novoArray
}

//Exercício 11

function ordenaArray(array) {
   let ordena =array.length
   for (let i = 0; i < ordena; i++){
      for (let j = 0; j < ordena; j++){
         if(array[j] > array[j + 1]){
            let abc = array[j]
            array[j] = array[j + 1]
            array[j + 1] = abc
         }
      }
   }return array
}

// Exercício 12

function filmeFavorito() {
   let filme ={
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    
 } 
 return filme
}

// Exercício 13

function imprimeChamada() {
   const output = 'Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci.'
   return output
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo ={
      largura : lado1,
      altura : lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2,
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      ...pessoa,
      nome:"ANÔNIMO"
   }

}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const novo = arrayDePessoas.filter((pessoa) =>{
      return pessoa.idade >= 18
   })
   return novo
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const novoMenores = arrayDePessoas.filter((pessoa) =>{
      return pessoa.idade < 18
   })
   return novoMenores
}

// Exercício 17, letra A
const array = [-1, 1, 2, 5, 25, 4]
function multiplicaArrayPor2(array) {
   const novo = array.map((num) =>{
      return num * 2
   })
      return novo

}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  const novo = array.map((num) =>{
     return (num * 2).toString()
  })
  return novo
}

// Exercício 17, letra C

function verificaParidade(array) {
      const novo = array.map((num) => {
        if (num % 2 === 0) {
          return `${num} é par`
        } else {
          return `${num} é ímpar`
        }
      })
    
      return novo
   }


// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let pessoasAutorizadas =[]
   for (const pessoa of pessoas){
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
         pessoasAutorizadas.push(pessoa)
      }
   }
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let naoAutorizadas =[]
   for (const pessoa of pessoas){
      if (pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60){
         naoAutorizadas.push(pessoa)
      }
   }
      return naoAutorizadas
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
   return consultas.map((consulta) => {
      let emailFinal = "Olá, "
  
      if (!consulta.cancelada) {
        if (consulta.genero === "feminino") {
          emailFinal += "Sra. "
        } else {
          emailFinal += "Sr. "
        }
  
        emailFinal += consulta.nome + ". "
        emailFinal += "Estamos enviando esta mensagem para "
  
        if (consulta.genero === "feminino") {
          emailFinal += "lembrá-la "
        } else {
          emailFinal += "lembrá-lo "
        }
  
        emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
        emailFinal += "Por favor, acuse o recebimento deste-email."
      } else {
        if (consulta.genero === "feminino") {
          emailFinal += "Sra. "
        } else {
          emailFinal += "Sr. "
        }
  
        emailFinal += consulta.nome + ". "
        emailFinal += "Infelizmente sua consulta marcada para o dia "
        emailFinal += consulta.dataDaConsulta + " foi cancelada. "
        emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
      }
      return emailFinal
    })
  }

console.log(retornaEmailConsulta)
//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((conta) => {
      let totalDeCompras = 0
      conta.compras.forEach((valor) => {
        totalDeCompras += valor
      })
      conta.saldoTotal -= totalDeCompras
    })
    return contas
  }
