import * as fs from 'fs';
import moment from 'moment';

moment.locale("pt-BR");

// Tipagem que representa transação
type Transaction = {
    value: number,
    date: string,
    description: string
}

// Tipagem do usuário da conta
type AccountUser = {
   name: string,
   cpf: string,
   birthDate: string,
   accountBalance: number,
   accountStatement: Transaction[]
}


// Função criar conta
const createAccount = (user: AccountUser): void => {

    const date = moment(user.birthDate, "DD/MM/YYYY")
    const today = moment();
    const age = today.diff(date, "years");

    if(age < 18) {
        console.log("Usuário tem que ser maior que 18 anos")
        return;
    }

    const newAccount: any = {
        name: user.name,
        cpf: user.cpf,
        birthDate: user.birthDate,
        accountBalance: 0,
        accountStatement: []
    }

    const fileAddress: string = "/home/jerryjones/labenu/Jerry-Santos/semana14/f4bank/accounts.json";
    const bufferOfFile: Buffer = fs.readFileSync(fileAddress);
    const textOfFile: string = bufferOfFile.toString();
    const accounts: AccountUser[] = JSON.parse(textOfFile);

    const foundUser = accounts.find((user: AccountUser) => {
        return user.cpf === cpf
    })

    if(foundUser !== undefined) {
        console.log("CPF já cadastrado")
        return;
    }

    accounts.push(newAccount);

    const accountsUpdate: string = JSON.stringify(accounts, null, 2)
    fs.writeFileSync(fileAddress, accountsUpdate);
    console.log("Conta criada com sucesso")
}


// Recebendo os dados via terminal
const name: string = process.argv[2];
const cpf: string = process.argv[3];
const birthDate: string = process.argv[4]

const user: any = {
    name,
    cpf,
    birthDate
}

createAccount(user);

// Função que pega todos os usuários
const getAllAccounts = (): string[] => {
    const fileAddress: string = "accounts.json";
    const bufferOfFile: Buffer = fs.readFileSync(fileAddress);
    const textOfFile: string = bufferOfFile.toString();
    const accounts: string[] = JSON.parse(textOfFile);
    return accounts;
}



