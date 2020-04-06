// Exercícios de interpretação de código
// 1.

// a. Um array vazio
// b. (6) [0, 1, 0, 1, 2, 3]
// c. (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]


// 2.

// a. Saídas "0 e 2", o índice dos itens buscados.
// b. Sim, funciona. Ele busca o número da mesma forma dentro do array e devolve o índice.


// 3. Soma e multiplica os valores do array para obter valores para um novo array. Um nome melhor seria criaNovoArraySomandoMultiplicando


// Exercícios de escrita de código

// 4.

// a.
// function calculaIdadeDeCachorro(anosHumanos) {
//     return anosHumanos * 7
// }

// let resultado = calculaIdadeDeCachorro(5);
// console.log("O cão tem " + resultado + " anos de cachorro.")

// b.
// let infos = (array) => {
//     let imprime = [];
    
//     for(let elemento of array){
//         imprime.push(elemento)
//     }

//     let estudante = "";

//     if(imprime[3] === true) {
//         estudante = "sou estudante.";
//     } else {
//         estudante = "não sou estudante."
//     }
    
//    return "Eu sou " + imprime[0] + ", tenho " + imprime[1] + " anos, moro em " + imprime[2] + " e " + estudante
// }   

// console.log(infos(["Jerry", 29, "Rua Comandante Pedro Melo", false]));


// 5.
// const anoComeca = 1000;
// const anoTermina = 2020;

// function descobrirSeculo(ano){
//     if(ano !== undefined){
//         if (ano >= anoComeca && ano <= anoTermina) {
//             if(ano === 1000){
//                 return "O ano 1000 pertence ao século X."
//             } else {
//                 if(ano >= 1001 && ano <= 1100){
//                     return "O ano " + ano + " pertence ao século XI."
//                 } else if (ano >= 1101 && ano <= 1200) {
//                     return "O ano " + ano + " pertence ao século XII."
//                 } else if (ano >= 1201 && ano <= 1300) {
//                     return "O ano " + ano + " pertence ao século XIII."
//                 } else if (ano >= 1301 && ano <= 1400) {
//                     return "O ano " + ano + " pertence ao século XIV."
//                 } else if (ano >= 1401 && ano <= 1500) {
//                     return "O ano " + ano + " pertence ao século XV."
//                 } else if (ano >= 1501 && ano <= 1600) {
//                     return "O ano " + ano + " pertence ao século XVI."
//                 } else if (ano >= 1601 && ano <= 1700) {
//                     return "O ano " + ano + " pertence ao século XVII."
//                 } else if (ano >= 1701 && ano <= 1800) {
//                     return "O ano " + ano + " pertence ao século XVIII."
//                 } else if (ano >= 1801 && ano <= 1900) {
//                     return "O ano " + ano + " pertence ao século XIX."
//                 } else if (ano >= 1901 && ano <= 2000) {
//                     return "O ano " + ano + " pertence ao século XX."
//                 } else if (ano >= 2001 && ano <= 2100) {
//                     return "O ano " + ano + " pertence ao século XXI."
//                 }
                
//             }
            
//         } else {
//             console.log("Ano inválido.")
//         }
//     } else {
//         console.log("Ano indefinido.")
//     }
// }

// let resultado = descobrirSeculo(1998);
// console.log(resultado);


// 6.
// a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

// function quantidadeElementosArray(arrayRecebido) {
//     return arrayRecebido.length
// }

// let resultado = quantidadeElementosArray(array);
// console.log(resultado);

// b.
function paridade(numero) {
    if(numero % 2 === 0){
        return true
    } else {
        return false
    }
}

// c.
// let numerosPares = (arrayNumeros) => {
//     let novoArray = [];
//     for(elemento of arrayNumeros){
//         if(elemento % 2 === 0){
//             novoArray.push(elemento);
//         }
//     }

//     return novoArray.length
// }

// let resultado = numerosPares(array);
// console.log(resultado)


// d.
let numerosPares = (arrayNumeros) => {
    let novoArray = [];
    for(elemento of arrayNumeros){
        if(paridade(elemento) === true){
            novoArray.push(elemento);
        }
    }

    return novoArray.length
}

let resultado = numerosPares(array);
console.log(resultado)