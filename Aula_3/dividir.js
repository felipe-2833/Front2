//Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. Importante:
//Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero".
let dividir = (n1,n2) => {
    let result = n1/n2;
    if (n2 == 0 || n1 == 0){
        result = "Não se pode dividir por zero."
    }
    return result
}

export default dividir;

