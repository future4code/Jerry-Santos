"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const Employee_1 = require("./Employee");
class Seller extends Employee_1.Employee {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
    }
    setSalesQuantity(value) {
        this.salesQuantity += value;
    }
    calculateTotalSalary() {
        return (this.baseSalary +
            Employee_1.Employee.BENEFITS_VALUE +
            Seller.SELLING_COMISSION * this.salesQuantity);
    }
}
exports.Seller = Seller;
Seller.SELLING_COMISSION = 5;
//# sourceMappingURL=Seller.js.map