import { IdGenerator } from "../service/utils/IdGenerator";
import { HashManager } from "../service/utils/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../service/utils/Authenticator";
import { User, UserRole } from "../model/User";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
    
    public async signup(name: string, email: string, password: string, role?: UserRole) {
        if (!name || !email || !password || name.trim() === "" || email.trim() === "" || password.trim() === "") {
            throw new Error("Please fill all the fields")
        }

        const id = this.idGenerator.generate();

        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(id, name, email, hashedPassword, role);

        await this.userDatabase.signup(user);

        const token = this.authenticator.generateToken({ id, name, email, role })


        return token;
    }

    public async login(email: string, password: string) {
        if (!email || !password || email.trim() === "" || password.trim() === "") {
            throw new Error("Please fill all the fields")
        }

        const user = await this.userDatabase.getUserByEmail(email)

        const isValidPassword = await this.hashManager.checkHash(password, user.getPassword())

        if (!isValidPassword) {
            throw new Error("Invalid credentials");
        }

        const token = this.authenticator.generateToken({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole()
        })

        return { token };
    }
}