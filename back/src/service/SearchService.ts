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
        const { origin, period, status, startDate, endDate } = body;

        if (!OriginEnum[origin]) {
            return {
                status: 'error',
                message: 'Field origin is required',
                originUsed: origin
            }
        }

        if (!StatusEnum[status]) {
            return {
                status: 'error',
                message: 'Field status is required',
                statusUsed: status
            }
        }

        if (!PeriodEnum[period]) {
            return {
                status: 'error',
                message: 'Field period is required',
                periodUsed: period
            }
        }

        if (!startDate || !endDate) {
            return {
                status: 'error',
                message: 'Fields startDate and endDate is required',
            }
        }

        const redisKey = `${origin}-${status}-${period}-${startDate}-${endDate}`;
        const cached = await this.redis.get(redisKey);
        const lastUpdate = await this.redis.get('lastUpdate');
        const lastUpdateDate = new Date(lastUpdate);
        if (cached && lastUpdateDate < (new Date(Date.now() - 1000 * 60 * 60 * 24))) {
            const resp = JSON.parse(cached);
            if (resp.status !== 'error' && resp.response.data.length > 0) {
                return resp;
            }
        }

        const response = await this.service.get({
            status: status,
            origin: origin,
            period: period,
            startDate: startDate,
            endDate: endDate
        });

        this.redis.set(redisKey, JSON.stringify(response), 'EX', 60 * 60 * 24);

        return response;
    }
}