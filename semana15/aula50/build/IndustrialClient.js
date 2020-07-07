"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrialClient = void 0;
const Industry_1 = require("./Industry");
class IndustrialClient extends Industry_1.Industry {
    constructor(name, industrialRegistrationNumber, registrationNumber, consumedEnergy, machinesQuantity, cep) {
        super(machinesQuantity, cep);
        this.name = name;
        this.industrialRegistrationNumber = industrialRegistrationNumber;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.industrialRegistrationNumber = industrialRegistrationNumber;
    }
    getIndustrialRN() {
        return this.industrialRegistrationNumber;
    }
    calculateBill() {
        return (this.consumedEnergy * 0.45) + (100 * this.machinesQuantity);
    }
}
exports.IndustrialClient = IndustrialClient;
//# sourceMappingURL=IndustrialClient.js.map