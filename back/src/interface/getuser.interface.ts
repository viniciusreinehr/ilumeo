import OriginEnum from "../enum/origin.enum";
import PeriodEnum from "../enum/period.enum";
import StatusEnum from "../enum/status.enum";

export default interface GetUserInterface {
    origin: OriginEnum;
    status: StatusEnum;
    period: PeriodEnum;
}