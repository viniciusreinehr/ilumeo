import express from 'express';
import * as bodyParser from 'body-parser';
import { PrismaClient } from '../generated/prisma'

import dotenv from 'dotenv';
import ImportService from './service/ImportService';
import Redis from 'ioredis';
import Auth from './middleware/Auth';

const redis = new Redis("redis-chache");
const prisma = new PrismaClient();

dotenv.config();

const app = express();

app.use(Auth);

app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

app.get('/', async (req, res) => {
    const posts = await prisma.users_surveys_responses_aux.findMany({
        where: { origin: 'email', response_status_id: 1 },
        orderBy: { created_at: 'desc' },
        take: 10
    })
    res.json({response: posts})
});

app.post('/populate', async (req, res) => {
    const service = new ImportService();
    const resp = service.file();
    res.json(resp)
});

app.get('/populate/status', async (req, res) => {
    const total = await redis.get('totalToImport');
    const posts = await prisma.users_surveys_responses_aux.count();
    const porcentagem = (Number(posts) * 100) / Number(total);
    res.json({response: {porcentagem: Number(porcentagem.toFixed(2)), total: Number(total), atual: posts}})
});

const porta = Number(process.env.PORT) || 8081;

app.listen(porta);