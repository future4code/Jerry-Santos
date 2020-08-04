import { Request, Response } from 'express';
import { EventBusiness } from '../business/EventBusiness';
import { BaseDatabase } from '../service/BaseDatabase';
import { Authenticator } from '../service/utils/Authenticator';

export class EventController {
    public async registerBand(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            if (authenticationData.role !== "ADMIN") {
                throw new Error("Only a admin user can access this funcionality");
            }

            const eventBusiness = new EventBusiness();
            await eventBusiness.registerBand(
                req.body.name,
                req.body.music_genre,
                req.body.responsible
            )

            res.status(200).send({ message: "Banda cadastrada com sucesso" })

        } catch (error) {
            res.status(400).send({ message: error.message })
        }

        await BaseDatabase.destroyConnection();
    }

    public async getInfoBand(req: Request, res: Response) {
        try {
            const eventBusiness = new EventBusiness();
            const band = await eventBusiness.getInfoBand(req.body.id)
            res.status(200).send(band)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}