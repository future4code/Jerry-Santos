"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(nameInput, ageInput, cpfInput) {
        this.balance = 0;
        this.transaction = [];
        this.getBalance = () => this.balance;
        this.addBalance = (value) => {
            this.balance += value;
            console.log(`O valor ${value} foi adicionado com sucesso à conta!`);
        };
        this.name = nameInput;
        this.age = ageInput;
        this.cpf = cpfInput;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=userAccount.js.map