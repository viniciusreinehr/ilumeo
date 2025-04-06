import GetUserInterface from '../interface/getuser.interface';
import { PrismaClient } from '../../generated/prisma'
import StatusEnum from '../enum/status.enum';
import OriginEnum from '../enum/origin.enum';

export default class UsersSurveysResponsesAux {
    constructor(
        private prisma = new PrismaClient()
    ) { }

    async get(filters: GetUserInterface) {
        const { status, origin, period } = filters;
        const query = this.query(filters);
        return this.prisma.$queryRawUnsafe(query)
            .then((result: any) => {
                return {
                    status: 'success',
                    response: {
                        origin: origin,
                        status: status,
                        period: period,
                        data: result.map((item: any) => {
                            return {
                                dia: item.dia.toString(),
                                mes: item.mes.toString(),
                                ano: item.ano.toString(),
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
        const { status, origin, period } = filters;
        return `
            SELECT
                id,
                origin,
                DAY(created_at) as dia,
                MONTH(created_at) as mes,
                YEAR(created_at) as ano,
                COUNT(DISTINCT id) as total
            FROM users_surveys_responses_aux usra
            WHERE usra.origin = '${OriginEnum[origin]}'
                AND usra.response_status_id = '${StatusEnum[status]}'
            GROUP BY 
                DAY(usra.created_at),
                MONTH(usra.created_at),
                YEAR(usra.created_at),
                usra.origin
        `;
    }
}