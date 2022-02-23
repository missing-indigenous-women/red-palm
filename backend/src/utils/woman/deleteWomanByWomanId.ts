import {Status} from "../../utils/interfaces/Status";
import {connect} from "../../utils/database.utils";
import {RowDataPacket} from 'mysql2';

export async function deleteWoman(womanId: string) : Promise<string> {
    try {
        console.log("womanId: ",womanId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'DELETE FROM woman WHERE womanId = UUID_TO_BIN(:womanId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {womanId})
        return "woman deleted successfully"
    } catch (error) {
        throw error
    }
}

