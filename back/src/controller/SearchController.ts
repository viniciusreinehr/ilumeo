import SearchService from "../service/SearchService";
import { Request, Response, NextFunction } from 'express';

export default class SearchController {
    constructor(
        private readonly searchService = new SearchService(),
    ) {}

    async get(req: Request, res:Response, next:NextFunction) {
        const resp = await this.searchService.search(req.body);
        if (resp.status === 'error') {
            return res.status(400).json(resp);
        }
        res.json(resp)
    }
}