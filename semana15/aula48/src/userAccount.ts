export class UserAccount {
    private name: string
    private age: number
    private cpf: string
    private balance: number = 0
    private transaction: Object[] = []

    constructor(nameInput: string, ageInput: number, cpfInput: string) {
            this.name = nameInput
            this.age = ageInput
            this.cpf = cpfInput  
    }

    public getBalance = ():number => this.balance
    public addBalance = (value: number): void => {
        this.balance += value
        console.log(`O valor ${value} foi adicionado com sucesso à conta!`)
    }
}