import ImportService from "../service/ImportService";
import { Request, Response, NextFunction } from 'express';

export default class ImportController {
    constructor(
        private readonly importService = new ImportService(),
    ) {}

    async get(req: Request, res:Response, next:NextFunction) {
        const resp = await this.importService.status();
        res.json(resp)
    }

    async post(req: Request, res:Response, next:NextFunction) {
        const resp = await this.importService.file();
        res.json(resp)
    }
}