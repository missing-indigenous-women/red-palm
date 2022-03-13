import {Post} from "../interfaces/Post";
import {Status} from "../interfaces/Status";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectAllPost() : Promise<Array<Post>|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId,BIN_TO_UUID(postAppUserId) AS postAppUserId, BIN_TO_UUID(postWomanId) AS postWomanId, postDate, postText FROM post'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery)
        const posts : Array<Post> = result[0] as Array<Post>
        return posts.length >= 1 ? [...posts] : null;

    } catch (error) {
        throw error
    }
}
