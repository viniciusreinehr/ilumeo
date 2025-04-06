import { PrismaClient } from '../../generated/prisma'

export default class UsersSurveysResponsesAux {
    constructor(
        private prisma = new PrismaClient()
    ) { }

    async getAll() {
        return await this.prisma.users_surveys_responses_aux.findMany({
            orderBy: {
                created_at: 'desc'
            },
            take: 100,
        }).then((result) => {
            return {
                status: 'success',
                response: {
                    total: result.length,
                    posts: result
                }
            };
        }).catch((error) => {
            return {
                status: 'error',
                message: 'Erro ao buscar os dados',
                error: error
            }
        });
    }
}