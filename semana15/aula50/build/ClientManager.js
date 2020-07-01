"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = void 0;
class ClientManager {
    constructor() {
        this.clients = [];
    }
    contructor() {
    }
    getClients() {
        return this.clients.length;
    }
    registerClient(client) {
        this.clients.push(client);
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=ClientManager.js.map