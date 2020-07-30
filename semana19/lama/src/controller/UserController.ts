import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { BaseDatabase } from '../service/BaseDatabase';
import { UserDatabase } from '../data/UserDatabase';
import { HashManager } from '../service/utils/HashManager';
import { IdGenerator } from '../service/utils/IdGenerator';
import { Authenticator } from '../service/utils/Authenticator';

export class UserController {

    public async signup(req: Request, res: Response) {
        try {

            const userBusiness = new UserBusiness(
                new UserDatabase(),
                new HashManager(),
                new IdGenerator(),
                new Authenticator()
            );
            const result = await userBusiness.signup(req.body.name, req.body.email, req.body.password, req.body.role);

            res.status(200).send({ token: result, message: "Usuário criado com sucesso" })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }

    }

    public async login(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness(
                new UserDatabase(),
                new HashManager(),
                new IdGenerator(),
                new Authenticator()
            );
            const result = await userBusiness.login(req.body.email, req.body.password)

            res.status(200).send(result);
        } catch (error) {
            res.status(400).send({ message: error.message })
        }

    }
}
