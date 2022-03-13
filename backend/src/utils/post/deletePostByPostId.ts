import {connect} from "../../utils/database.utils";
import {RowDataPacket} from 'mysql2';

export async function deletePost(postId: string) : Promise<string> {
    try {
        console.log("postId: ",postId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'DELETE FROM post WHERE postId = UUID_TO_BIN(:postId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {postId})
        return "Post deleted successfully"
    } catch (error) {
        throw error
    }
}

