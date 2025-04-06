import Redis from "ioredis";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();
export default class ImportService {
    private filas: number = 0;
    async file() {
        const redis = new Redis("redis-chache");
        var fs = require('fs');
        const sql = await fs.readFileSync('/app/case_tech_lead.sql').toString();
        const items = sql.split(';');
        redis.set('totalToImport', (items.length*10).toString());
        return this.exec(items);
    }

    private async exec(array) {
        if (array.length === 0) {
            return {
                status: 'success',
                message: 'Importação em execução!',
                filas: this.filas
            };
        }
        const newArray = array.splice(0, 10000);
        this.loop(newArray);
        this.filas++;
        return this.exec(array);
    }

    private async loop(array) {
        while (array.length > 0) {
            const item = array.pop();
            await this.do(item);
        }
    }

    private async do(item) {
        await prisma.$executeRawUnsafe(item).then((result: any) => {
            return result;
        }).catch((error: any) => {
            return error;
        }
        );
    }
}