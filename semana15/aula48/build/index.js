"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userAccount_1 = require("./userAccount");
const JSONFileManager_1 = require("./JSONFileManager");
const name = process.argv[2];
const cpf = process.argv[3];
const age = Number(process.argv[4]);
const file = new JSONFileManager_1.JSONFileManager();
const newAccount = (name, age, cpf) => {
    if (age < 18) {
        console.log("A idade mínima é 18 anos.");
        return;
    }
    const newUser = new userAccount_1.UserAccount(name, age, cpf);
    const accountsList = file.getObjectFromFile();
    accountsList.push(newUser);
    file.writeObjectToFile(accountsList);
    console.log("Conta criada com sucesso!");
};
const getAccountBalance = (name, cpf) => {
    const accountsList = file.getObjectFromFile();
    const user = accountsList.find((acc) => {
        return acc.name === name && acc.cpf === cpf;
    });
    user === undefined ? console.log("Usuário não encontrado") : console.log(`Saldo: R$ ${user.balance}`);
};
getAccountBalance(name, cpf);
//# sourceMappingURL=index.js.map