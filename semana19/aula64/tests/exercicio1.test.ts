import { validateCharacter } from "../src/exercicio1";

describe("validateCharacter", () => {

    test("Retorna false para um personagem de nome vazio", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strenght: 500,
            defence: 300
        });

        expect(result).toBe(false);

    })

    test("Retorna false para um personagem de vida vazia", () => {
        const result = validateCharacter({
            name: "Diogo, o Capeta em Forma de Guri",
            life: undefined,
            strenght: 500,
            defence: 300
        });

        expect(result).toBe(false);

    })

    test("Retorna false para um personagem de força vazia", () => {
        const result = validateCharacter({
            name: "Diogo, o Capeta em Forma de Guri",
            life: 1500,
            strenght: undefined,
            defence: 300
        });

        expect(result).toBe(false);

    })

    test("Retorna false para um personagem de força vazia", () => {
        const result = validateCharacter({
            name: "Diogo, o Capeta em Forma de Guri",
            life: 1500,
            strenght: 500,
            defence: undefined
        });

        expect(result).toBe(false);

    })

    test("Retorna false para um personagem de vida negativa", () => {
        const result = validateCharacter({
            name: "Diogo, o Capeta em Forma de Guri",
            life: -100,
            strenght: 500,
            defence: 300
        });

        expect(result).toBe(false);

    })

    test("Retorna true para um personagem de vida de valor 0", () => {
        const result = validateCharacter({
            name: "Diogo, o Capeta em Forma de Guri",
            life: 0,
            strenght: 500,
            defence: 300
        });

        expect(result).toBe(true);

    })

    test("Retorna true para um personagem com todas informações válidas", () => {
        const result = validateCharacter({
            name: "Diogo, o Capeta em Forma de Guri",
            life: 1500,
            strenght: 500,
            defence: 300
        });

        expect(result).toBe(true);

    })

})