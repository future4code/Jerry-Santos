import { Employee } from './Employee';

export class Seller extends Employee {
    private salesQuantity: number = 0;
    static SELLING_COMISSION: number = 5;

    public setSalesQuantity(value: number): void {
        this.salesQuantity += value;
    }

    public calculateTotalSalary(): number {
        return (
            this.baseSalary + 
            Employee.BENEFITS_VALUE + 
            Seller.SELLING_COMISSION * this.salesQuantity
        )
    }
}