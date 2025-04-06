import Redis from "ioredis";
import { PrismaClient } from "../../generated/prisma";
import { stat } from "fs";

export default class ImportService {
    private filas: number = 0;
    private items: number = 0;

    constructor(
        private redis = new Redis("redis-chache"),
        private prisma = new PrismaClient()
    ) { }

    async file() {
        var fs = require('fs');
        const sql = await fs.readFileSync('/app/case_tech_lead.sql').toString();
        const items = sql.split(';');
        this.items = (items.length*10)-17;
        this.redis.set('totalToImport', (this.items).toString());
        return this.exec(items);
    }

    async status() {
        const total = await this.redis.get('totalToImport');
        const posts = await this.prisma.users_surveys_responses_aux.count();
        const porcentagem = Number(((Number(posts) * 100) / Number(total)).toFixed(2));
        const status = porcentagem < 100 ? 'processing' : 'success';
        return {
            status: status,
            response: {
                porcentagem: porcentagem,
                total: Number(total),
                atual: posts
            }
        }
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
        this.redis.set('lastUpdate', (new Date(Date.now() - 1000 * 60 * 60 * 24)).toString());
        await this.prisma.$executeRawUnsafe(item).then((result: any) => {
            return result;
        }).catch((error: any) => {
            return error;
        }
        );
    }
}