/*node nome-do-arquivo.js parametro[2] parametro[3] ja que a posição 0 e 1 são preeenchidas por padrão  */

const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = Number(process.argv[3]) + Number(7)

if (!nome || !idade){
    console.log("Esperava dois argumentos")
} else {
    console.log(`"Olá, ${nome}! Você tem ${idade} anos.Em sete anos você terá ${novaIdade}`)
}

