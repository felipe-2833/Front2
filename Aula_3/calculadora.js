//Criar um arquivo calculadora.js no qual serão necessários os quatro arquivos feitos anteriormente.

import somar from './somar.js';
import subtrair from './subtrair.js';
import multiplicar from './multiplicar.js';
import dividir from './dividir.js';

//Executar a função que permite adicionar e a função que permite subtrair, passando como argumentos quaisquer dois números. Mostrar os resultados no console.
console.log(somar(1,2))
console.log(subtrair(1,2))

//Executar a função que permite a multiplicação, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
console.log(multiplicar(1,2))

//Executar a função que permite multiplicar, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.
console.log(multiplicar(3,0))

//Executar a função que permite a divisão, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
console.log(dividir(1,2))

//Executar a função que permite dividir, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.
console.log(dividir(0,2))

//calculador

//declaração de variaveis
let num = 0;
let n1 = 0;
let n1Conv =  0;
let n2 = 0;
let n2Conv =  0;
let result = 0;
let operacao = 0;
let operacaoConvertida = 0;

//função para decidir qual operação usar
let calculo = (operDefinida) => {

    switch(operDefinida){
        case 1:
            if (operDefinida === 1){

                n1 = prompt("Informe o primeiro numero:");
                n1Conv =  Number(n1);
                n2 = prompt("Informe o sugundo numero:\n" +n1+ "+" );
                n2Conv =  Number(n2);
                
                result = somar(n1Conv,n2Conv)
                return result
            }
            
            break;

            case 2:
                if (operDefinida === 2){

                    n1 = prompt("Informe o primeiro numero:");
                    n1Conv =  Number(n1);
                    n2 = prompt("Informe o sugundo numero:\n" +n1+ "-" );
                    n2Conv =  Number(n2);
                    
                    result = subtrair(n1Conv,n2Conv)
                    return result
                }
                
                break;

                case 3:
                    if (operDefinida === 3){
    
                        n1 = prompt("Informe o primeiro numero:");
                        n1Conv =  Number(n1);
                        n2 = prompt("Informe o sugundo numero:\n" +n1+ "*" );
                        n2Conv =  Number(n2);
                        
                        result = multiplicar(n1Conv,n2Conv)
                        return result
                    }
                    
                    break;

                case 4:
                    if (operDefinida === 4){
        
                        n1 = prompt("Informe o primeiro numero:");
                        n1Conv =  Number(n1);
                        n2 = prompt("Informe o sugundo numero:\n" +n1+ "/" );
                        n2Conv =  Number(n2);
                        
                        result = dividir(n1Conv,n2Conv)
                        return result
                    }
                        
                    break;
    }
}

//loop para escolher devidamente a operação
while(operacao > 4 || operacao < 1 ){

    operacao = prompt("Calculadora:\nInforme um dos numeros inteiros:\n 1 = soma \n 2 = subtração\n 3 = multiplicação\n 4 = divisão");
    operacaoConvertida = Number(operacao);

}

//resultado
num = calculo(operacaoConvertida);
alert(num)
console.log("Resultado da operação: " + num);