// Exercícios de interpretação de código

// 1. Ele cria uma variável que armazena uma soma de si mais a variável i a cada loop e no fim mostra o resultado na tela. O resultado é 105.

// 2.
// a. O comando push adiciona um novo item ao array
// b. (4) [10, 15, 25, 30]
// c. 
// const numero =  3 - (6) [12, 15, 18, 21, 27, 30]
// const numero = 4 - [12]


// DESAFIO 1
// 0
// 00
// 000
// 0000


// Exercícios de escrita de código

// 3.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a.
// let maior = array[0]
// let menor = array[1];

// for(let item of array) {
//     if(item > maior) {
//         maior = item;
//     } else if (item < menor) {
//         menor = item;
//     }
// }

// console.log("O maior número é " + maior + " e o menor é " + menor);

// b.
// let novoArray = []

// for(let item of array) {
//     novoArray.push(item/10);
// }

// console.log(novoArray)

// c.
// let novoArray = []

// for(let item of array) {
//     if(item % 2 == 0) {
//         novoArray.push(item)
//     }
// }

// console.log(novoArray)

// d.
let novoArray = []
let index = 0;
for(let item of array) {
    novoArray.push("O elemento do index " + index + " é " + item);
    index++;
}

console.log(novoArray)