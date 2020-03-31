// Exercícios de interpretação de código

// 1. O código realiza o teste dos divisores de 2, imprime "Passou no teste" para os pares e "Não passou no teste" para os ímpares.


// 2.
// a. Para descobrir o preço de determinada fruta de um supermercado
// b. O preço da fruta  Maçã  é  R$  2.25
// c. 24.55
// d. O preço da fruta  Pêra  é  R$  5


// 3. A variável mensagem é let não pode ser acessada do lado de fora do escopo em que se encontra.


// Exercícios de escrita de código

// 4.
// a.
// const numeroUm = Number(prompt("Digite um número:"));
// const numeroDois = Number(prompt("Digite outro número:"));

// if(numeroUm > numeroDois) {
//     console.log(numeroUm)
//     console.log(numeroDois)
// } else {
//     console.log(numeroDois)
//     console.log(numeroUm)
// }

// Ele imprime primeiro o último número digitado, depois o primeiro. A condição escrita no else.

// b.
// const numeroUm = Number(prompt("Digite um número:"));
// const numeroDois = Number(prompt("Digite outro número:"));
// const numeroTres = Number(prompt("Digite novamente outro número:"));


    
//     if(numeroUm > numeroDois && numeroUm > numeroTres && numeroDois > numeroTres) {
//         console.log(numeroUm)
//         console.log(numeroDois)
//         console.log(numeroTres)
//     } else if(numeroDois > numeroUm && numeroDois > numeroTres && numeroTres > numeroUm) {
//         console.log(numeroDois)
//         console.log(numeroTres)
//         console.log(numeroUm)
//     } else if(numeroDois > numeroUm && numeroDois > numeroTres && numeroUm > numeroTres) {
//         console.log(numeroDois)
//         console.log(numeroUm)
//         console.log(numeroTres)
//     } else if(numeroTres > numeroUm && numeroTres > numeroDois && numeroDois > numeroUm) {
//         console.log(numeroTres)
//         console.log(numeroDois)
//         console.log(numeroUm)
//     } else if(numeroTres > numeroDois && numeroUm > numeroDois && numeroTres > numeroUm) {
//         console.log(numeroTres)
//         console.log(numeroUm)
//         console.log(numeroDois)
//     } else if(numeroUm > numeroTres && numeroTres > numeroDois && numeroUm > numeroDois) {
//         console.log(numeroUm)
//         console.log(numeroTres)
//         console.log(numeroDois)
//     }

// Se os número forem iguais nada aparece no console


// c.
// const numeroUm = Number(prompt("Digite um número:"));
// const numeroDois = Number(prompt("Digite outro número:"));
// const numeroTres = Number(prompt("Digite novamente outro número:"));

// if(numeroUm === numeroDois && numeroDois === numeroTres) {
    
//     console.log("Tente adicionar pelo menos um número diferente do outro")

// } else {
//     if(numeroUm > numeroDois && numeroUm > numeroTres && numeroDois > numeroTres) {
//         console.log(numeroUm)
//         console.log(numeroDois)
//         console.log(numeroTres)
//     } else if(numeroDois > numeroUm && numeroDois > numeroTres && numeroTres > numeroUm) {
//         console.log(numeroDois)
//         console.log(numeroTres)
//         console.log(numeroUm)
//     } else if(numeroDois > numeroUm && numeroDois > numeroTres && numeroUm > numeroTres) {
//         console.log(numeroDois)
//         console.log(numeroUm)
//         console.log(numeroTres)
//     } else if(numeroTres > numeroUm && numeroTres > numeroDois && numeroDois > numeroUm) {
//         console.log(numeroTres)
//         console.log(numeroDois)
//         console.log(numeroUm)
//     } else if(numeroTres > numeroDois && numeroUm > numeroDois && numeroTres > numeroUm) {
//         console.log(numeroTres)
//         console.log(numeroUm)
//         console.log(numeroDois)
//     } else if(numeroUm > numeroTres && numeroTres > numeroDois && numeroUm > numeroDois) {
//         console.log(numeroUm)
//         console.log(numeroTres)
//         console.log(numeroDois)
//     }

// }


// 5.
const ossos = prompt("O animal possui ossos? [s/n]");

if(ossos == "n") {
    console.log("Invertebrado")
} else {
    let pelos = prompt("Possui pelos? [s/n]")
    if (pelos == "s") {
        let racional = prompt("É racional? [s/n]")
        if (racional == "n") {
            console.log("Mamífero Não Humano")
            
        } else {
            console.log("Ser Humano")
            
        }
    } else {
        if (pelos == "n") {
            let penas = prompt("Possui penas [s/n]")
            if(penas == "s") {
                console.log("Ave")
            } else {
                let terrestre = prompt("É animal terrestre? [s/n]")
                if(terrestre == "n") {
                    console.log("Peixe")
                } else {
                    let aquatico = prompt("Passa parte da vida em ambiente aquático? [s/n]")
                    if(aquatico == "n") {
                        console.log("Réptil")
                    } else {
                        console.log ("Anfíbio")
                    }
                }
            }
        } 
    }
} 