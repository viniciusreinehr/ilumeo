import GetUserInterface from '../interface/getuser.interface';
import { PrismaClient } from '../../generated/prisma'
import StatusEnum from '../enum/status.enum';
import OriginEnum from '../enum/origin.enum';
import PeriodEnum from '../enum/period.enum';

export default class UsersSurveysResponsesAux {
    constructor(
        private prisma = new PrismaClient()
    ) { }

    async get(filters: GetUserInterface) {
        const { status, origin, period } = filters;
        const query = this.query(filters);
        console.log("Query: ", query);
        return this.prisma.$queryRawUnsafe(query)
            .then((result: any) => {
                return {
                    status: 'success',
                    response: {
                        origin: origin,
                        status: status,
                        period: period,
                        data: result.map((item: any) => {
                            console.log("Item: ", item);
                            return {
                                created_at: item.created_at,
                                total: item.total.toString()
                            }
                        })
                    }
                };
            }).catch((error: any) => {
                return {
                    status: 'error',
                    message: error.message
                };
            });

    }

    private query(filters: GetUserInterface) {
        const { status, origin, period, startDate, endDate } = filters;
        const groupBy = this.groupBy(period);
        return `
            SELECT
                id,
                origin,
                created_at,
                COUNT(DISTINCT id) as total
            FROM users_surveys_responses_aux usra
            WHERE usra.origin = '${OriginEnum[origin]}'
                AND usra.response_status_id = '${StatusEnum[status]}'
                AND DATE(usra.created_at) BETWEEN '${startDate}' AND '${endDate}'
            GROUP BY ${groupBy}
            ORDER BY usra.created_at DESC
        `;
    }

    private groupBy(period: string) {
        let groups = ['usra.origin'];
        switch (PeriodEnum[period]) {
            case 'day':
                groups.push('DATE(created_at)');
                break;
            case 'week':
                groups.push('WEEK(created_at)');
                break;
            case 'month':
                groups.push('MONTH(created_at)');
                break;
            case 'year':
                groups.push('YEAR(created_at)');
                break;
            case 'all':
            default:
                break;
        }
        return groups.join(', ');
    }
}