import UsersSurveysResponsesAux from '../dao/UsersSurveysResponsesAux';
import Redis from 'ioredis';

export default class SearchService {
    constructor(
        private service = new UsersSurveysResponsesAux(),
        private redis = new Redis("redis-chache")
    ) {}

    async search(body) {
        const { origin, period } = body;

        return await this.service.getAll()
    }
}