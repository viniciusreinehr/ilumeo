import OriginEnum from '../enum/origin.enum';
import UsersSurveysResponsesAux from '../dao/UsersSurveysResponsesAux';
import Redis from 'ioredis';
import StatusEnum from '../enum/status.enum';
import PeriodEnum from '../enum/period.enum';

export default class SearchService {
    constructor(
        private service = new UsersSurveysResponsesAux(),
        private redis = new Redis("redis-chache")
    ) {}

    async search(body) {
        const { origin, period, status } = body;

        if (!OriginEnum[origin]) {
            return {
                status: 'error',
                message: 'Origin inválido',
                originUsed: origin
            }
        }

        if (!StatusEnum[status]) {
            return {
                status: 'error',
                message: 'Status inválido',
                statusUsed: status
            }
        }

        if (!PeriodEnum[period]) {
            return {
                status: 'error',
                message: 'Periodo inválido',
                periodUsed: period
            }
        }

        const redisKey = `${origin}-${status}-${period}`;
        const cached = await this.redis.get(redisKey);
        if (cached) {
            return {
                status: 'success',
                response: JSON.parse(cached)
            }
        }

        const response = await this.service.get({
            status: status,
            origin: origin,
            period: period
        });

        this.redis.set(redisKey, JSON.stringify(response), 'EX', 60 * 60 * 24);

        return response;
    }
}