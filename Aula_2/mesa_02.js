//mensagem para iniciar o jogo
alert("Vamos jogar JOKENPO??\n Para ganhar o jogo é preciso ganhar 2 rodadas.")

//declaração de variaveis
let pontosJogador = 0;
let pontosMaquina = 0;

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
          return true
        }

        else if (valorMaquina === 2){
            return false
        }

        else if (valorMaquina === 1){
            return 0
        }

        break;

        case 2:
        if (valorMaquina === 1){
            return true
        }
        else if (valorMaquina === 3){
            return false
        }
        else if (valorMaquina === 2){
            return 0
        }
        break;

        case 3:
        if (valorMaquina === 2){
            return true
        }
        else if (valorMaquina === 1){
            return false
        }
        else if (valorMaquina === 3){
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
        alert("Você ganhou esta rodada!\n Placar: ${pontosJogador}x${pontosMaquina}")
    }
    else if (ganhador === false){
        pontosMaquina++
        alert("Você perdeu esta rodada!\n Placar: ${pontosJogador}x${pontosMaquina}")

    }
    else if (ganhador === 0){
        alert("Empate!\n Placar: ${pontosJogador}x${pontosMaquina}")
    }
}

//mensagem para o ganhador 
if (pontosJogador === 2){
    alert("PARABENS!!!\n Você ganhou!")
}

else if (pontosMaquina === 2){
    alert("AAAAAAAAAAH\n Você perdeu :(")
}








