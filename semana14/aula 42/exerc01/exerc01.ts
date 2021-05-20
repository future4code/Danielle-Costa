const minhaString: string = "Labenu"
// a) apresenta erro na atriuição

let meuNumero: number = 5
//b) let meuNumero: number | string = 5

enum arcoIris {
    VERDE = "Verde",
    AMARELO = "Amarelo",
    AZUL = "Azul",
    LILAS = "Lilás",
    VIOLETA = "Violeta",
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
}

type person = {
    name: string,
    age: number,
    corFavorita: arcoIris,
     }
const astrodev: person = {
    name: "Astrodev",
    age: 30,
    corFavorita: arcoIris.AZUL
    }
const palvan: person = {
    name: "Palvan",
    age: 12,
    corFavorita: arcoIris.AMARELO
    }
const maria: person = {
        name: "Maria",
        age: 40,
        corFavorita: arcoIris.VERMELHO
    }