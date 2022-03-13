import {Status} from "../../utils/interfaces/Status";
import {connect} from "../../utils/database.utils";
import {SocialMedia} from "../interfaces/SocialMedia";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateSocialMedia(socialMediaObj: SocialMedia) : Promise<string> {
    try {
        console.log("socialMediaObj: ",socialMediaObj)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'UPDATE socialMedia SET socialMediaWomanId = UUID_TO_BIN(:socialMediaWomanId), socialMediaFacebook=:socialMediaFacebook, socialMediaInstagram=:socialMediaInstagram, socialMediaTicktock=:socialMediaTicktock, socialMediaTwitter=:socialMediaTwitter WHERE socialMediaId = UUID_TO_BIN(:socialMediaId)'
        console.log(mySqlQuery)
        const [result]= await mySqlConnection.execute(mySqlQuery, socialMediaObj) as [ResultSetHeader, RowDataPacket]
        return "socialMedia updated successfully"
    } catch (error) {
        throw error
    }
}

