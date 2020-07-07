"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientManager_1 = require("./ClientManager");
const ResidentialClient_1 = require("./ResidentialClient");
const CommercialClient_1 = require("./CommercialClient");
const IndustrialClient_1 = require("./IndustrialClient");
const clientManager = new ClientManager_1.ClientManager();
const residentialClient = new ResidentialClient_1.ResidentialClient("Jorge Jesus", "111.111.111-11", 10, 220, 3, "55555-555");
clientManager.registerClient(residentialClient);
const commercialClient = new CommercialClient_1.CommercialClient("Flamengo", "0000000/0001-00", 1, 1200, 81, "11111-111");
clientManager.registerClient(commercialClient);
const industrialClient = new IndustrialClient_1.IndustrialClient("Adidas", 192312, 2, 756213, 12000, "99999-999");
clientManager.registerClient(industrialClient);
console.log(clientManager);
//# sourceMappingURL=index.js.map