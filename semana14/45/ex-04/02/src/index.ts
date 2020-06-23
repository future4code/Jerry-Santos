// Exercício 2
const operacao:string = process.argv[2];
const a:number = Number(process.argv[3]);
const b:number = Number(process.argv[4]);


function resolveAi(operacao: string, a: number, b:number): any {

    switch(operacao) {
        case "SOMA":
            return a + b
        case "SUBTRAI":
            return a - b
        case "MULTIPLICA":
            return a * b
        case "DIVIDE": 
            return a / b
        default:
        break;
    }

}

console.log(resolveAi(operacao, a, b));
