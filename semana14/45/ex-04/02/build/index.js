"use strict";
const operacao = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);
function resolveAi(operacao, a, b) {
    switch (operacao) {
        case "SOMA":
            return a + b;
        case "SUBTRAI":
            return a - b;
        case "MULTIPLICA":
            return a * b;
        case "DIVIDE":
            return a / b;
        default:
            break;
    }
}
console.log(resolveAi(operacao, a, b));
//# sourceMappingURL=index.js.map