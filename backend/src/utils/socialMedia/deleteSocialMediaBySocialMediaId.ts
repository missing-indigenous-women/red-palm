import {Status} from "../../utils/interfaces/Status";
import {SocialMedia} from "../../utils/interfaces/SocialMedia";
import {connect} from "../../utils/database.utils";
import {RowDataPacket} from 'mysql2';

export async function deleteSocialMedia(socialMediaId: string) : Promise<string> {
    try {
        console.log("socialMediaId: ",socialMediaId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'DELETE FROM socialMedia WHERE socialMediaId = UUID_TO_BIN(:socialMediaId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {socialMediaId})
        return "socialMedia deleted successfully"
    } catch (error) {
        throw error
    }
}

