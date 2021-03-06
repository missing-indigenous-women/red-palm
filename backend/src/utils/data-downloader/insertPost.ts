import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertPost(post: Post) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO post(postId, postAppUserId, postWomanId, postDate, postText) VALUES(UUID_TO_BIN(:postId), UUID_TO_BIN(:postAppUserId),UUID_TO_BIN(:postWomanId), NOW(), :postText)";
        const [result]= await mySqlConnection.execute(mySqlQuery, post) as [ResultSetHeader, RowDataPacket]
        await mySqlConnection.release()
        return "Post created successfully"
    } catch (error) {
        throw error
    }
}
