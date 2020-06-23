// Exercício 1

// let minhaString: string = "Teste";

// minhaString = 1

// console.log(minhaString)

// a. Ele mostra que não posso adicionar um number a uma variável tipo string

// b. Pra adicionar números e letras devemos definir o tipo como number e string
// let meuNumero: number | string = 7

// c.
// const user: {name: string, age: number, favColor: string} = {
//     name: "Zé",
//     age: 29,
//     favColor: "Preto"
// }

// d.
// type user = {
//     name: string,
//     age: number,
//     favColor: string
// }

// const u1: user = {
//     name: "João",
//     age: 32,
//     favColor: "Azul"
// }

// const u2: user = {
//     name: "Jorge",
//     age: 23,
//     favColor: "Vermelho"
// }

// const u3: user = {
//     name: "Antônio",
//     age: 25,
//     favColor: "Amarelo"
// }

// e.

enum CoresDoArcoiris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    INDIGO = "Índigo",
    VIOLETA = "Violeta"
}

type user = {
    name: string,
    age: number,
    favColor: CoresDoArcoiris
}

const u1: user = {
    name: "João",
    age: 32,
    favColor: CoresDoArcoiris.AZUL
}

const u2: user = {
    name: "Jorge",
    age: 23,
    favColor: CoresDoArcoiris.VERMELHO
}

const u3: user = {
    name: "Antônio",
    age: 25,
    favColor: CoresDoArcoiris.AMARELO
}