import express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Auth from './middleware/Auth';
import SearchController from './controller/SearchController';
import ImportController from './controller/ImportController';

dotenv.config();

const app = express();

app.use(Auth);

app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

const searchControl = new SearchController();
app.get('/', async (req: Request, res:Response, next:NextFunction) => await searchControl.get(req,res,next));

const importControl = new ImportController();
app.post('/populate', async (req: Request, res:Response, next:NextFunction) => await importControl.post(req,res,next));
app.get('/populate/status', async (req: Request, res:Response, next:NextFunction) => await importControl.get(req,res,next));

const porta = Number(process.env.PORT) || 8081;

app.listen(porta);