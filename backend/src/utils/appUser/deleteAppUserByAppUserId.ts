import {Status} from "../../utils/interfaces/Status";
import {connect} from "../../utils/database.utils";
import {RowDataPacket} from 'mysql2';

export async function deleteAppUser(appUserId: string) : Promise<string> {

    try {
        console.log("appUserId: ",appUserId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'DELETE FROM appUser WHERE appUserId = UUID_TO_BIN(:appUserId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {appUserId})
        return "appUSer deleted successfully"
    } catch (error) {
        throw error
    }
}

