
// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
const carta = comprarCarta();
const carta1 = comprarCarta();
const comp1 = comprarCarta();
const comp2 = comprarCarta();
let jog1 = carta1.valor + carta.valor
let jog2 = comp1.valor + comp2.valor

let partida = confirm("Quer jogar novamente?")
if(partida){

    //const carta = comprarCarta();  Sorteia uma carta. Por exemplo, o rei de ouros
    
    //console.log(carta.texto)  imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    //console.log(carta.valor)  imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
   
   //const carta1 = comprarCarta();
   //console.log(carta1.texto)
   //console.log(carta1.valor)

   //const comp1 = comprarCarta();
   //const comp2 = comprarCarta();

   //let jog1 = carta1.valor + carta.valor
   //jog1 = carta.valor + carta1.valor//
    
    console.log(`Usuário - cartas: ${carta.texto} e ${carta1.texto} - Soma é ${jog1}`)

   //let jog2 = comp1.valor + comp2.valor
   console.log(`Computador - cartas:  ${comp1.texto} e ${comp2.texto} Soma é ${jog2}`)

   if(jog1 > jog2){
      console.log("Você ganhou!!!")
   }
   else if(jog1 < jog2) {
      console.log("Computador ganhou")
   } 
   else if(jog1 === jog2){
      console.log("Empate!!")
   }
} else {
   console.log("Fim de jogo")
}
