import Redis from "ioredis";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();
export default class ImportService {
    async file() {
        const redis = new Redis("redis-chache");
        var fs = require('fs');
        const sql = await fs.readFileSync('/app/case_tech_lead.sql').toString();
        const items = sql.split(';');
        redis.set('totalToImport', (items.length*10).toString());
        this.exec(items);
    }

    private async exec(array) {
        if (array.length === 0) {
            console.log('Importação finalizada!');
            return;
        }
        const newArray = array.splice(0, 1000);
        this.loop(newArray);
        this.exec(array);
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