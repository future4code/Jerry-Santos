// Exercícios de leitura de código
/* 1. Um conversor de moedas que recebe como parâmetro o valor em dólar 
e converte para reais. A função recebe o valor da cotação em um prompt, certifica
de transformar ele pro tipo number e multiplica pelo valor informado em dólares.
No exemplo da imagem se a cotação do dólar estivesse em 5.20, ele retornaria
no console R$520 */

/* 2. Na função que simula um programa de investimentos é passado como parâmetro
o tipo de investimento e o valor. Um switch case vai analisar o parâmetro
tipoDeInvestimento para que possa fazer o cálculo adicionando a uma variável
que guarda esse valor para dar o retorno da função. Nos exemplos do código a resposta
do console é 161 e um alerta na tela informando que o tipo de investimento está incorreto. */

/* 3. O programa tem um array de número definido e quer criar dois novos arrays
com números pares e ímpares. As respostas do console serão respectivamente
"Quantidade total de números 14"
6
8 */

/* 4. O programa vai percorrer todos os itens de um array, comparar se o número é
maior que as variáveis para que possa assim definir um novo valor para 
as variáveis numero1 e numero2. A resposta no console será 1590 e 1590; */


// Exercícios de lógica de programação
// 1. 
// a. false
// b. false
// c. true
// d. true
// e. true

/* 2. O código não definia o valor da const quantidadeDeNumerosPares
e quando definido gerava um loop infinito a melhor forma de implementar seria
com uma função da seguinte forma*/

// function quantidadeDeNumerosPares(quantidade) {
//     array = []
//     for(i=0; i < quantidade; i++){
//         array.push(i*2)
//     }
//     return array
// }

// let resultado = quantidadeDeNumerosPares(5)
// console.log(resultado)

// 3.
// function classificaTriangulo(a, b, c) {
//     if(a === b && a === c) {
//         return "Triângulo equilátero"
//     } else if (a !== b && b !== c && a !== c) {
//         return "Triângulo escaleno"
//     } else {
//         return "Triângulo isósceles"
//     }
// }

// let resultado = classificaTriangulo(4, 4, 4);
// console.log(resultado);

// 4.

// let numeros = (a,b) => {
    
//     if(a > b) {
//        console.log("O maior é " + a)
//     } else {
//         console.log("O maior é " + b)
//     }

//     if(a % b === 0 ) {
//         console.log(a + " é divisível por " + b)
//     } else {
//         console.log(a + " não é divisível por " + b)
//     }

//     if(b % a === 0) {
//         console.log(b + " é divisível por " + a)
//     } else {
//         console.log(b + " não é divisível por " + a)
//     }

//     if(a > b) {
//         console.log("A diferença entre eles é " + (a - b))
//     } else {
//         console.log("A diferença entre eles é " + (b - a))
//     }
    
// }

// numeros(15, 30)


// Exercícios de Funções
// 1.
function encontraMaiorMenorNumero(array) {
    
    let numeros = array;
    numeros.sort(function(a, b) {
        return a - b;
    });
    
    let tamanho = numeros.length - 2;
    let arrayFinal =[numeros[tamanho], numeros[1]]
    return arrayFinal

}


const resultado = encontraMaiorMenorNumero([2, 45, 32, 5, 6, 7])
console.log(resultado)