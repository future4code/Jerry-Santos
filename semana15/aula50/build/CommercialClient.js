"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommercialClient = void 0;
const Commerce_1 = require("./Commerce");
class CommercialClient extends Commerce_1.Commerce {
    constructor(name, cnpj, registrationNumber, consumedEnergy, floorsQuantity, cep) {
        super(floorsQuantity, cep);
        this.name = name;
        this.cnpj = cnpj;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=CommercialClient.js.map