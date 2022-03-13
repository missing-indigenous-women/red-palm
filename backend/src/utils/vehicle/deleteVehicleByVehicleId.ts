import {Status} from "../../utils/interfaces/Status";
import {connect} from "../../utils/database.utils";
import {RowDataPacket} from 'mysql2';

export async function deleteVehicle(statusId: string) : Promise<Status[]> {
    try {
        console.log("statusId: ",statusId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'SELECT BIN_TO_UUID(statusId) as statusId, statusColor, statusValue  FROM status WHERE statusId = UUID_TO_BIN(:statusId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {statusId})
        console.log("result0: ", result[0])
        return result[0] as Status[]
    } catch (error) {
        throw error
    }
}

