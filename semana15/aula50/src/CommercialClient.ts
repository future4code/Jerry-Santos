import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        private cnpj: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string

    ){
        super(floorsQuantity, cep);
        this.cnpj = cnpj;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }
}