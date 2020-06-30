import { User } from './User';
import { Customer } from './Customer';
import { Employee } from './Employee';
import { Seller } from './Seller';

// Exercício 1
// a. Só se criasse um getPassword lá na classe porque a chave é privada
// b. Foi exibida apenas uma vez

const newUser: User = new User(
    "ASBGEASUHUDAHE", 
    "gil@gilberto.com.br", 
    "Gilberto Gil", 
    "12345"
);

const newCustomer: Customer = new Customer(
    "HSDUHUERHSDH", 
    "rita@lee.com.br", 
    "Rita Lee", 
    "12345", 
    "98343826382738"
);

// Exercício 2
// a. 1 vez
// b. 2 vezes porque foi chamada ao criar o User e o Customer

// Exercício 3
// console.log(newCustomer.getId());
// console.log(newCustomer.getEmail());
// console.log(newCustomer.getName());
// console.log(newCustomer.getCreditCard());
// console.log(newCustomer.purchaseTotal);

// a. Não seria possível porque o valor é privado e não há um getPassword na classe pai

// Exercício 4
// Exercício 5

//newCustomer.introduceYourself();

// Exercício 6

const newEmployee: Employee = new Employee(
    "HUASHHDGEGAS", 
    "d2@marcelod2.com.br", 
    "Marcelo Peixoto",
    "124345",
    "10/02/1985",
    300
)

// a. 3 vezes

// console.log(newEmployee.getId());
// console.log(newEmployee.getEmail());
// console.log(newEmployee.getName());
// console.log(newEmployee.getAdmissionDate());
// console.log(newEmployee.getBaseSalary());

// b. Só não é possível imprimir o password

// Exercício 7

//console.log(newEmployee.calculateTotalSalary());

// Exercício 8
// a. Id, email, nome, password, admissionDate, baseSalary

const newSeller: Seller = new Seller(
    "YEHDYSAHSY", 
    "saint@marcelod2.com.br",
    "Stephan Peixoto",
    "12345",
    "02/06/2015",
    200
)

// console.log(newSeller.getId());
// console.log(newSeller.getEmail());
// console.log(newSeller.getName());
// console.log(newSeller.getAdmissionDate());
// console.log(newSeller.getBaseSalary());
// console.log(newSeller.calculateTotalSalary());

// b. Id, e-mail, nome, data de admissão, salário e benefícios.
// Só não a senha porque é privada e não tem getter.

// Exercício 9
// a. Não é possível porque ele é privado e não tem um getter
//newSeller.setSalesQuantity(4);

//Exercício 10
const otherSeller: Seller = new Seller(
    "YJUEHSUJWUH", 
    "babylonbygus@blackalien.com.br",
    "Gustavo Black Alien",
    "12345",
    "18/10/1990",
    300
)

otherSeller.setSalesQuantity(21)

console.log(otherSeller.calculateTotalSalary());

// a. Foram impressas as chamadas de construtor e o valor 805 que veio do cálculo do salário + benefício e comissão

// Exercício 11 implementado
