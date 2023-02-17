//mensagem para iniciar o jogo
alert("Vamos jogar JOKENPO contra a maquina??\n Para ganhar o jogo é preciso ganhar 2 rodadas.")

//declaração de variaveis
let pontosJogador = 0;
let pontosMaquina = 0;
let ferramenta = "";

//função para estabelecer o numero gerado aleatoriamente pela maquina
let aleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//função de comparação entre os valares: da maquina e do jogador 
let jokenpo = (valorJogador,valorMaquina) => {

    switch (valorJogador){
        case 1:
        if (valorMaquina === 3){
            ferramenta = "pedra"
          return true
        }

        else if (valorMaquina === 2){
            ferramenta = "tesoura"
            return false
        }

        else if (valorMaquina === 1){
            ferramenta = "papel"
            return 0
        }

        break;

        case 2:
        if (valorMaquina === 1){
            ferramenta = "papel"
            return true
        }
        else if (valorMaquina === 3){
            ferramenta = "pedra"
            return false
        }
        else if (valorMaquina === 2){
            ferramenta = "tesoura"
            return 0
        }
        break;

        case 3:
        if (valorMaquina === 2){
            ferramenta = "tesoura"
            return true
        }
        else if (valorMaquina === 1){
            ferramenta = "papel"
            return false
        }
        else if (valorMaquina === 3){
            ferramenta = "pedra"
            return 0
        }
        break;
    }
}

//loop que estabelece as regras da mesa: só ganha quem ganhar 2 rodadas
while(pontosJogador < 2 && pontosMaquina < 2){
    let valorInformado = prompt("Informe um dos numeros inteiros:\n 1 = papel\n 2 = tesoura\n 3 = pedra");
    let valorConvertido = Number(valorInformado);
    let valorAleatorio = aleatorio(1,3);
    let ganhador = jokenpo(valorConvertido,valorAleatorio)

    if (ganhador === true){
        pontosJogador++
        alert("Você ganhou esta rodada!Ponto pra você!\n Maquina utilizou: " + ferramenta +"\nPlacar: Jogador " + pontosJogador + "x" + pontosMaquina + " Maquina")
    }
    else if (ganhador === false){
        pontosMaquina++
        alert("Você perdeu esta rodada!Ponto da Maquina!\n Maquina utilizou: " + ferramenta +"\nPlacar: Jogador " + pontosJogador + "x" + pontosMaquina + " Maquina")

    }
    else if (ganhador === 0){
        alert("Empate!Ninguem ganha ponto!\n Maquina utilizou: " + ferramenta +"\nPlacar: Jogador " + pontosJogador + "x" + pontosMaquina + " Maquina")
    }
}

//mensagem para o ganhador 
if (pontosJogador === 2){
    alert("PARABENS!!!\n Você ganhou!\n Placar: Jogador " + pontosJogador + "x" + pontosMaquina + " Maquina")
}

else if (pontosMaquina === 2){
    alert("AAAAAAAAAAH, Vitoria da Maquina.\n Você perdeu :(\n Placar: Jogador " + pontosJogador + "x" + pontosMaquina + " Maquina")
}