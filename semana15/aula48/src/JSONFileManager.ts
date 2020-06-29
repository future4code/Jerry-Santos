import * as fs from 'fs';

export class JSONFileManager {
    private fileName: string = 'accounts.json'

    public getObjectFromFile(): Object {
        const fileBuffer: Buffer = fs.readFileSync(this.fileName)
        const fileText: string = fileBuffer.toString()
        return fileText ? JSON.parse(fileText) : [] 
    }

    public writeObjectToFile(data: any): void {
        const updatedData: string = JSON.stringify(data, null, 2)
        fs.writeFileSync(this.fileName, updatedData)
    }
}