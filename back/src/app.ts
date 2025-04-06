import express from 'express';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Auth from './middleware/Auth';
import ImportService from './service/ImportService';
import SearchService from './service/SearchService';

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
    const service = new SearchService();
    const resp = await service.search(req.body);
    if (resp.status === 'error') {
        return res.status(400).json(resp);
    }
    res.json(resp)
});

const service = new ImportService();

app.post('/populate', async (req, res) => {
    const resp = await service.file();
    res.json(resp)
});

app.get('/populate/status', async (req, res) => {
    const resp = await service.status();
    res.json(resp)
});

const porta = Number(process.env.PORT) || 8081;

app.listen(porta);