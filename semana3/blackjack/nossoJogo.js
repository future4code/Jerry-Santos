/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
   console.log("Iniciando...")

   let usuarioCartaUm = comprarCarta();
   let usuarioCartaDois = comprarCarta();
   let computadorCartaUm = comprarCarta();
   let computadorCartaDois = comprarCarta();
   let pontuacaoUsuario = usuarioCartaUm.valor + usuarioCartaDois.valor;
   let pontuacaoComputador = computadorCartaUm.valor + computadorCartaDois.valor;

   console.log("Usuário - cartas: " + usuarioCartaUm.texto + " " + usuarioCartaDois.texto + " - pontuação " + pontuacaoUsuario);
   console.log("Computador - cartas: " + computadorCartaUm.texto + " " + computadorCartaDois.texto + " - pontuação " + pontuacaoComputador);

   if(pontuacaoUsuario > pontuacaoComputador) {
      console.log("O Usuário ganhou!")
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      console.log("Empate!")
   } else {
      console.log("O Computador ganhou!")
   }

} else {
   console.log("O Jogo acabou");
}
