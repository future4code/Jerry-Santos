import * as fs from 'fs';

type AccountUser = {
   name: string,
   cpf: number,
   birthDate: string,
   accountBalance: number,
   accountStatement: any[] 
}

type Transaction = {
    value: number,
    date: number,
    description: string
}