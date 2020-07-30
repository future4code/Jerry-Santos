import { Character, validateCharacter } from './exercicio1';

// export const performAttack = (
//     attacker: Character, 
//     defender: Character
//     ) => {
//         if (!validateCharacter(attacker) || 
//         !validateCharacter(defender)) {
//             throw new Error("Ivalid character");
//         }
        
//         if (attacker.strenght > defender.defence) {
//             defender.life -= attacker.strenght - defender.defence;
//         }
// }

export const performAttack = (
    attacker: Character, 
    defender: Character,
    validate: (input: Character) => boolean
    ) => {
        if (!validate(attacker) || 
        !validate(defender)) {
            throw new Error("Invalid character");
        }
        
        if (attacker.strenght > defender.defence) {
            defender.life -= attacker.strenght - defender.defence;
        }
}