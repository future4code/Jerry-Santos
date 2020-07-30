import jwt from 'jsonwebtoken';

export interface AuthenticationData {
    id: string,
    name: string,
    email: string,
    role: string
};

export class Authenticator {

    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            {
                id: input.id,
                name: input.name,
                email: input.email,
                role: input.role
            },
            process.env.JWT_KEY as string,
            { expiresIn: "10min" }
        );
        return token;
    };

    public getData(token: string): AuthenticationData {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any;
        const result = {
            id: payload.id,
            name: payload.name,
            email: payload.email,
            role: payload.role
        };
        return result;
    };
};