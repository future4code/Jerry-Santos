import { IdGenerator } from "../service/utils/IdGenerator";
import { Band } from "../model/Band";
import { EventDatabase } from "../data/EventDatabase";

export class EventBusiness {
    public async registerBand(
        name: string,
        music_genre: string,
        responsible: string
    ) {
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const band = new Band(id, name, music_genre, responsible);
        const bandDb = new EventDatabase();
        const result = bandDb.registerBand(band)


        return result;
    }

    public async getInfoBand(id: string) {

        const bandDb = new EventDatabase();
        const result = await bandDb.getBandById(id)
        return result;
    }
}