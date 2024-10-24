let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio;
let tentativa = 1;

function exibirTextoNatela(tag,texto) {
    let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
  exibirTextoNatela('h1', 'Jogo do Numero secreto');
  exibirTextoNatela('p', 'Escolha um numero entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNatela('h1','Acertou!');
    let palavraTentativa = tentativa > 1? 'tentativa':'tentativa';
     let mensagemTentativa = `Voce descobriu o numero secreto com ${tentiva} ${palavraTentativa}`;
 exibirTextoNatela('p', mensagemTentativa);
 document.getElementById('reiniciar').removeAttribute('disabled');


}else{
       if (chute > numeroSecreto) {
     exibirTextoNatela('p','O numero secreto e menor');
       }else {
        exibirTextoNatela('p','O numero secreto e maior')
       }
       tentativa++
       limparCampo();
       }
  }


    function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let qualidadeDeElementosNaLista = listaDeNumerosSorteados.lenght;
    if(qualidadeDeElementosNaLista == numeroLimite){
      listaDeNumerosSorteados = [];
    }
    
    
    
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
    }else{
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(gerarNumeroAleatorio);
      return numeroEscolhido;
    }
        }

        function limparCampo(){
            chute = document.querySelector();
            chute.value = '';
        }
        function reiniciarJogo(){
          numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativa = 1;
       exibirMensagemInicial(); 
       document.getElementById('reiniciar').removeAttribute('disabled',true);
      }

        

