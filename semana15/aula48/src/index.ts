// Exercícios
// 1. O construtor serve para instanciar os objetos passando como parâmetro os atributos da classe
// 2. A mensagem foi impressa apenas uma vez
// 3. Com os getters
// 4. Sim é possível imprimir o saldo

import { UserAccount } from './userAccount';
import { JSONFileManager } from './JSONFileManager';

const name:string = process.argv[2]
const cpf:string = process.argv[3]
const age:number = Number(process.argv[4])

const file: JSONFileManager = new JSONFileManager()

const newAccount = (name: string, age: number, cpf: string): any => {
    if(age < 18) {
        console.log("A idade mínima é 18 anos.")
        return
    }
    
    const newUser: UserAccount = new UserAccount(name, age, cpf)

    const accountsList: any = file.getObjectFromFile();
    accountsList.push(newUser)
    file.writeObjectToFile(accountsList)

    console.log("Conta criada com sucesso!")

}

//newAccount(name, age, cpf)

const getAccountBalance = (name: string, cpf: string): any => {
    const accountsList: any = file.getObjectFromFile();
    const user = accountsList.find((acc: any) => {
        return acc.name === name && acc.cpf === cpf
    })
    user === undefined ? console.log("Usuário não encontrado") : console.log(`Saldo: R$ ${user.balance}`)
}

getAccountBalance(name, cpf)