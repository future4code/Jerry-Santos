import { User, performPurchase } from '../src/exercicio1';

describe("performPurchase", () => {
    test("deve retornar um novo usuário com saldo maior que 0", () => {
        const pedro: User = {
            name: "Pedro",
            balance: 200
        }

        const result = performPurchase(pedro, 100)

        expect(result.balance).toEqual(100);
    });

    test("deve retornar um novo usuário com saldo 0", () => {
        const pedro: User = {
            name: "Pedro",
            balance: 200
        }

        const result = performPurchase(pedro, 200)

        expect(result.balance).toEqual(0);
    });

    test("deve retornar undefined", () => {
        const pedro: User = {
            name: "Pedro",
            balance: 200
        }

        const result = performPurchase(pedro, 300)

        expect(result).toEqual(undefined);
    });
});