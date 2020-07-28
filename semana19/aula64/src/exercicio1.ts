export interface Character {
    name: string;
    life: number;
    strenght: number;
    defence: number;
}

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.life === undefined ||
        input.strenght === undefined ||
        input.defence === undefined
    ) {
        return false;
    }

    if (
        input.life < 0 || 
        input.strenght < 0 ||
        input.defence < 0
    ) {
        return false;
    }

    return true;
}