import * as fs from 'fs';
// Exercício 1
// a. Acessamos via process.argv
// b.

// const nome:string = process.argv[2];
// const idade:number = Number(process.argv[3]);

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c.
// const nome:string = process.argv[2];
// const idade:number = Number(process.argv[3]);
// const emSeteAnos: number = idade + 7;

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${emSeteAnos}.`)



// Exercício 2
// const operacao:string = process.argv[2];
// const a:number = Number(process.argv[3]);
// const b:number = Number(process.argv[4]);


// function resolveAi(operacao: string, a: number, b:number): any {

    // switch(operacao) {
        // case "SOMA":
            // return a + b
        // case "SUBTRAI":
            // return a - b
        // case "MULTIPLICA":
            // return a * b
        // case "DIVIDE": 
            // return a / b
        // default:
        // break;
    // }

// }

// console.log(resolveAi(operacao, a, b));



// EXercício 3
// const nomeDoArquivo: string = process.argv[2];
// const novaTarefa: string = process.argv[3];
// const tarefa: string = `\n${novaTarefa}`;

// fs.appendFileSync(nomeDoArquivo, tarefa, 'utf8');

