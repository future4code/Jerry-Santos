import * as fs from 'fs';
import * as moment from 'moment';

type AccountUser = {
   name: string,
   cpf: number,
   birthDate: moment.Moment,
   accountBalance: number,
   accountStatement: any[] 
}

type Transaction = {
    value: number,
    date: number,
    description: string
}

// const createAccount = (user: AccountUser): void => {

// }

// const name: string = process.argv[2];
// const cpf: number = process.argv[3];
// const birthDate: moment.Moment =

// const user: AccountUser = {

// }