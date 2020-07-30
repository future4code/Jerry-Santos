enum Location {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

enum Nacionality {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

interface User {
    name: string;
    age: number;
    nacionality: Nacionality;
}

interface Casino {
    name: string;
    location: Location;
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

export function verifyAge(casino: Casino, users: User[]): Result {
    const result = {
        brazilians: {
            allowed: [],
            unallowed: []
        },
        americans: {
            allowed: [],
            unallowed: []
        }
    }

    users.map(user => {
        if(casino.location === "EUA" && user.age >= 21) {
            result.americans.allowed.push(user.name)
        }

        if(casino.location === "EUA" && user.age < 21) {
            result.americans.unallowed.push(user.name)
        }

        if(casino.location === "BRAZIL" && user.age >= 21) {
            result.brazilians.allowed.push(user.name)
        }

        if(casino.location === "BRAZIL" && user.age < 21) {
            result.brazilians.unallowed.push(user.name)
        }
    })

    return result;
}

const list: User[] = [
    {
        name: "Emerson Dias",
        age: 45,
        nacionality: Nacionality.BRAZILIAN
    },
    {
        name: "Quinho",
        age: 65,
        nacionality: Nacionality.BRAZILIAN
    },
    {
        name: "Wander Pires Jr",
        age: 14,
        nacionality: Nacionality.BRAZILIAN
    },
    {
        name: "Dwight",
        age: 35,
        nacionality: Nacionality.AMERICAN
    },
    {
        name: "Michael",
        age: 40,
        nacionality: Nacionality.AMERICAN
    },
    {
        name: "Jim Jr",
        age: 12,
        nacionality: Nacionality.AMERICAN
    },
    
]


const inVegas = {
    name: "In Vegas",
    location: Location.EUA
}

const inRio = {
    name: "In Rio",
    location: Location.BRAZIL
}

console.log(verifyAge(inVegas, list))
console.log("TESTE")