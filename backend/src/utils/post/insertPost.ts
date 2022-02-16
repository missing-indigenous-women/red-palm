import {Status} from "../interfaces/Status";
import {connect} from "../../src/database";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertStatus(post: post) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO post(postId,  postAppUserId,  postAppUserId,) VALUES(UUID_TO_BIN(UUID()), :statusColor, :statusValue)";

        const [result]= await mySqlConnection.execute(mySqlQuery, status) as [ResultSetHeader, RowDataPacket]
        return "Status created successfully"
    } catch (error) {
        throw error
    }
}
