"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-BR");
const createAccount = (user) => {
    const date = moment_1.default(user.birthDate, "DD/MM/YYYY");
    const today = moment_1.default();
    const age = today.diff(date, "years");
    if (age < 18) {
        console.log("Usuário tem que ser maior que 18 anos");
        return;
    }
    const newAccount = {
        name: user.name,
        cpf: user.cpf,
        birthDate: user.birthDate,
        accountBalance: 0,
        accountStatement: []
    };
    const fileAddress = "/home/jerryjones/labenu/Jerry-Santos/semana14/f4bank/accounts.json";
    const bufferOfFile = fs.readFileSync(fileAddress);
    const textOfFile = bufferOfFile.toString();
    const accounts = JSON.parse(textOfFile);
    const foundUser = accounts.find((user) => {
        return user.cpf === cpf;
    });
    if (foundUser !== undefined) {
        console.log("CPF já cadastrado");
        return;
    }
    accounts.push(newAccount);
    const accountsUpdate = JSON.stringify(accounts, null, 2);
    fs.writeFileSync(fileAddress, accountsUpdate);
    console.log("Conta criada com sucesso");
};
const name = process.argv[2];
const cpf = process.argv[3];
const birthDate = process.argv[4];
const user = {
    name,
    cpf,
    birthDate
};
createAccount(user);
const getAllAccounts = () => {
    const fileAddress = "accounts.json";
    const bufferOfFile = fs.readFileSync(fileAddress);
    const textOfFile = bufferOfFile.toString();
    const accounts = JSON.parse(textOfFile);
    return accounts;
};
//# sourceMappingURL=index.js.map