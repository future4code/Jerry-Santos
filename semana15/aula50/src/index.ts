import { Client } from "./Client";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ClientManager } from "./ClientManager";
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";

// Exercício 1

// const client: Client  = {
//     name: "Jorge Jesus",
//     registrationNumber: 1,
//     consumedEnergy: 220,

//     calculateBill: () => {
//         return 2;
//     }
// }

// console.log(client.name);
// console.log(client.registrationNumber);
// console.log(client.consumedEnergy);
// console.log(client.calculateBill());

// a. Foi possível imprimir todas as informações. Acredito que porque não existe encapsulamento.

// Exercício 2

// a. "Cannot create an instance of an abstract class"
// b. Só é possível criar a partir de uma classe filha.

// Exercício 3

// const jesusHome: Residence = new Residence(3, "55555-555");
// const flaCommerce: Commerce = new Commerce(3, "11111-111");
// const adidasIndustry: Industry = new Industry(12000, "99999-999");

// console.log(jesusHome.getCep());
// console.log(flaCommerce.getCep());
// console.log(adidasIndustry.getCep());

// Exercício 4
// a. Métodos getCpf, calculateBill, getResidentsQuantity. 
// Propriedades name, cpf, registrationNumber, consumedEnergy, residentsQuantity e cep.
// Porque implementa as propriedades de Client, Residence e o cep que é propriedade própria.

// Exercício 5
// a. As informações herdadas da interface Client.
// b. A propriedade CPF/CNPJ e o método getFloorsQuantity/getResidentsQuantity.

// Exercício 6
// a. Deve ser filha de Industry por se tratar da regra de negócio de um cliente industrial.
// b. Implementa Client porque é do tipo cliente.
// c. Porque a informação do número de registro industrial não sofre alterações no decorrer da aplicação.

// Exercício 7 implementado

// Exercício 8

const clientManager: ClientManager = new ClientManager();

const residentialClient: ResidentialClient = new ResidentialClient(
    "Jorge Jesus",
    "111.111.111-11",
    10,
    220,
    3,
    "55555-555"
);

clientManager.registerClient(residentialClient);

const commercialClient: CommercialClient = new CommercialClient(
    "Flamengo",
    "0000000/0001-00",
    1,
    1200,
    81,
    "11111-111"
);

clientManager.registerClient(commercialClient);

const industrialClient: IndustrialClient = new IndustrialClient(
    "Adidas",
    192312,
    2,
    756213,
    12000,
    "99999-999"
);

clientManager.registerClient(industrialClient);

