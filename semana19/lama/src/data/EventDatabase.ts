import { BaseDatabase } from "../service/BaseDatabase";
import { Band } from "../model/Band";


export class EventDatabase extends BaseDatabase {

    private static TABLE_NAME = "NOME_TABELA_BANDAS";

    private dataToModel(data?: any): Band | undefined {
        return data && new Band(data.id, data.name, data.music_genre, data.responsible);
    }

    public async registerBand(band: Band): Promise<void> {
        try {
            return await this.getConnection()
                .insert({
                    id: band.getId(),
                    name: band.getName(),
                    music_genre: band.getMusicGenre(),
                    responsible: band.getResponsible()
                })
                .into(process.env.BAND_DB_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getBandById(id: string): Promise<any> {
        try {
            const band = await this.getConnection()
                .select("*")
                .from(EventDatabase.TABLE_NAME)
                .where({ id })

            return this.dataToModel(band[0])
        } catch (error) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }
}