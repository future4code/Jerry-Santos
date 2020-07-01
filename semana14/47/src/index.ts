import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// Exercício 1
// a. o endpoint  /subscribers/all
// b. Promise<any[]>
// c.

// async function getAllSubscribers(): Promise<any[]> {
//         const response = await axios.get(`${baseUrl}/subscribers/all`)
//         return response.data
// }

// getAllSubscribers();



// Exercício 2
// a. O async na função nomeada vem antes da declaração da função e na arrow vem antes dos ()
// b. 
// const getAllSubscribers = async (): Promise<any[]> => {
//          const response = await axios.get(`${baseUrl}/subscribers/all`)
//          return response.data
// }

// getAllSubscribers();



// Exercício 3

type User = {
    id: string,
    name: string,
    email: string
}

// a. Não
// b. Para definir que tipo de retorno estamos esperando e evitar erros
// c.

const getAllSubscribers = async (): Promise<User[]> => {
         const response = await axios.get(`${baseUrl}/subscribers/all`)
         console.log(response.data)
         return response.data.map((res: any) => {
             return {
                 id: res.id,
                 name: res.name,
                 email: res.email
             }
         })
}

getAllSubscribers();

