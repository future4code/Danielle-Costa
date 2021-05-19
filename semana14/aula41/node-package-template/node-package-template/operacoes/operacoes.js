const operacoes = process.argv[2]


switch(operacoes) {
    case "soma":
        const resposta =  Number(process.argv[3]) + Number(process.argv[4])
        console.log(resposta)
      break
    case "subt":
        const respostaSubt = Number(process.argv[3]) - Number(process.argv[4])
        console.log(respostaSubt)
      break
    case "mult":
        const respostaMult = Number(process.argv[3]) * Number(process.argv[4])
        console.log(respostaMult)
      break
    case "divi":
        const respostaDiv = Number(process.argv[3]) / Number(process.argv[4])
        console.log(respostaDiv)
      break
    default:
          console.log("3 argumentos")
      break
}