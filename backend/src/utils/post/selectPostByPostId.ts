import {Post} from "../interfaces/Post";
import {Status} from "../interfaces/Status";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectPostByPostId(postId: string) : Promise<Post|null> {
    try {
        console.log("postId", postId)
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId,BIN_TO_UUID(postAppUserId) AS postAppUserId, BIN_TO_UUID(postWomanId) AS postWomanId, postDate, postText FROM post WHERE postId = UUID_TO_BIN (:postId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {postId})
        const posts : Array<Post> = result[0] as Array<Post>
        await mySqlConnection.release()
        return posts.length === 1 ? {...posts[0]} : null;

    } catch (error) {
        throw error
    }
}
