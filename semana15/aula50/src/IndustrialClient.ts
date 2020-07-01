import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        private industrialRegistrationNumber: number,
        public registrationNumber: number,
        public consumedEnergy: number,
        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep);
        this.industrialRegistrationNumber = industrialRegistrationNumber;
    }

    public getIndustrialRN(): number {
        return this.industrialRegistrationNumber
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.45) + (100 * this.machinesQuantity);
    }
}