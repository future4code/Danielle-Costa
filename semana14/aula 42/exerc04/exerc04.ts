/*
a) tsc --init, criar as pastas src e build e dar tsc na pasta src.
b) se o tsc --init já foi feito, somente tsc para atualizar o arquivo js
c) usar somente tsc"
d) alteramos somente o que estava nos slides "target para "es6", rootDir para "./src", outDir para "./build" ●Descomente as chaves sourceMap, removeComments e noImplicitAny"
*/

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}