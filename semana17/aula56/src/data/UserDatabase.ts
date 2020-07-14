import { BaseDatabase } from './BaseDatabase';
import { USER_ROLES } from '../services/Authenticator';

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "Users";

    async createUser(
        id: string,
        email: string,
        password: string,
        role: USER_ROLES
    ): Promise<void> {
        await this.getConnection()
        .insert({
            id,
            email,
            password,
            role,
        })
        .into(UserDatabase.TABLE_NAME);

        BaseDatabase.destroyConnection();
    };

    async getUserByEmail(email: string): Promise<any> {
        const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({email});

        BaseDatabase.destroyConnection();

        return result[0];
    }

    async getUserById(id: string): Promise<any> {
        const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({id});

        BaseDatabase.destroyConnection();

        return result[0];
    }

    async deleteUser(id: string): Promise<void> {
        await this.getConnection()
        .raw(`
            DELETE FROM ${UserDatabase.TABLE_NAME}
            WHERE id="${id}"
        `)

        BaseDatabase.destroyConnection();
    }
};