import {Status} from "../../utils/interfaces/Status";
import {connect} from "../../utils/database.utils";
import {Post} from "../interfaces/Post";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updatePost(post: Post) : Promise<string> {
    try {
        console.log("postId: ",post)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'UPDATE post SET postWomanId = UUID_TO_BIN(:postWomanId), postDate = :postDate, postText = :postText WHERE postId = UUID_TO_BIN(:postId)'
        console.log(mySqlQuery)
        await mySqlConnection.release()
        const [result]= await mySqlConnection.execute(mySqlQuery, post) as [ResultSetHeader, RowDataPacket]
        return "Post updated successfully"
    } catch (error) {
        throw error
    }
}

