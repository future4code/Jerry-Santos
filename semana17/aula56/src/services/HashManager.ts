import * as bcrypt from 'bcryptjs';

export class HashManager {
    public async hash(text: string): Promise<string> {
        const rounds = 12;
        const salt = await bcrypt.genSalt(rounds);
        const cipherText = await bcrypt.hash(text, salt);

        return cipherText;
    }

    async compare(text: string, cipherText: string): Promise<boolean> {
        const result = await bcrypt.compare(text, cipherText);

        return result;
    }
}