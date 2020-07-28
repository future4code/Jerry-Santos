// Exercício 5

import { Character } from '../src/exercicio1';
import { performAttack } from '../src/exercicio3';


describe("performAttack", () => {
    test("Personagens com valores válidos", () => {
        const validatorMock = jest.fn(() => {
            return true;
        })

        const attacker: Character = {
            name: "Diogo, o Capeta em Forma de Guri",
            life: 1500,
            strenght: 500,
            defence: 300
        }

        const defender: Character = {
            name: "Punhos de Merda",
            life: 1500,
            strenght: 200,
            defence: 400
        }

        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toBe(1400);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);    
    });

    test("Personagens com valores inválidos", () => {
        const validatorMock = jest.fn(() => {
            return false;
        })

        const attacker: Character = {
            name: "Diogo, o Capeta em Forma de Guri",
            life: 1500,
            strenght: 500,
            defence: 300
        }

        const defender: Character = {
            name: "Punhos de Merda",
            life: 1500,
            strenght: 200,
            defence: 400
        }

        try {
            performAttack(attacker, defender, validatorMock as any);
        } catch (error) {
            expect(error.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);    
        }
    });

    test("Retornos da função", () => {
        const validatorMock = jest.fn(() => {
            return true;
        })

        const attacker: Character = {
            name: "Diogo, o Capeta em Forma de Guri",
            life: 1500,
            strenght: 500,
            defence: 300
        }

        const defender: Character = {
            name: "Punhos de Merda",
            life: 1500,
            strenght: 200,
            defence: 400
        }

        performAttack(attacker, defender, validatorMock as any);

        expect(validatorMock).toHaveReturned()
        expect(validatorMock).toHaveReturnedWith(true)
        expect(validatorMock).not.toHaveReturnedWith(false)
        expect(validatorMock).toHaveReturnedTimes(2);
    });
})