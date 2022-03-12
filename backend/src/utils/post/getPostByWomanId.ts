import {Post} from "../interfaces/Post";
// import {Status} from "../interfaces/Status";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function getPostByWomanId(postWomanId: string) : Promise<Post[] > {
    try {
        console.log("postId", postWomanId)
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId,BIN_TO_UUID(postAppUserId) AS postAppUserId, BIN_TO_UUID(postWomanId) AS postWomanId, postDate, postText FROM post WHERE postWomanId = UUID_TO_BIN (:postWomanId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {postWomanId})
        await mySqlConnection.release()
        const posts: Array<Post> = result[0] as Array<Post>
        return posts;

    } catch (error) {
        throw error
    }
}
