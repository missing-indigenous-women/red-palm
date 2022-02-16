
import {Status} from "../interfaces/Status";
import {connect} from "../../src/database";
import {RowDataPacket} from 'mysql2';






export async function selectStatusByStatusId(statusProfileId: string) : Promise<Status[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(statusId), statusColor, statusValue  FROM status WHERE statusId = UUID_TO_BIN(:statusProfileId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {statusProfileId})
        return result[0] as Status[]
    } catch (error) {
        throw error
    }
}
