"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Customer_1 = require("./Customer");
const Employee_1 = require("./Employee");
const Seller_1 = require("./Seller");
const newUser = new User_1.User("ASBGEASUHUDAHE", "gil@gilberto.com.br", "Gilberto Gil", "12345");
const newCustomer = new Customer_1.Customer("HSDUHUERHSDH", "rita@lee.com.br", "Rita Lee", "12345", "98343826382738");
const newEmployee = new Employee_1.Employee("HUASHHDGEGAS", "d2@marcelod2.com.br", "Marcelo Peixoto", "124345", "10/02/1985", 300);
const newSeller = new Seller_1.Seller("YEHDYSAHSY", "saint@marcelod2.com.br", "Stephan Peixoto", "12345", "02/06/2015", 200);
const otherSeller = new Seller_1.Seller("YJUEHSUJWUH", "babylonbygus@blackalien.com.br", "Gustavo Black Alien", "12345", "18/10/1990", 300);
otherSeller.setSalesQuantity(21);
console.log(otherSeller.calculateTotalSalary());
//# sourceMappingURL=index.js.map