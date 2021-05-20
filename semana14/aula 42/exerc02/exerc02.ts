
type amostraDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {}
  }

function obterEstatisticas(numeros:number[]) { 
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b)

    let soma : number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length,
    }

    return estatisticas
}

const amostraDeIdades: amostraDados = {
    numeros: [21, 23, 45, 44, 35],
    obterEstatisticas : obterEstatisticas
}


console.log("amostraDeIdades:", amostraDeIdades)
console.log("estatisticas da amostra:", obterEstatisticas(amostraDeIdades.numeros))


// a)

// A entrada é um array de numeros
// A saida é um objeto com as estatiticas do array

// b)

// a variável numerosOrdenados do tipo Array numeros
// variável soma do tipo number
// a variável estatisticas do tipo estatistica