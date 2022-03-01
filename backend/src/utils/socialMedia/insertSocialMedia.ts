import {SocialMedia} from "../interfaces/SocialMedia";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertSocialMedia(socialMediaObj: SocialMedia) : Promise<string> {
    try {
        console.log(socialMediaObj)
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO socialMedia(socialMediaId, socialMediaWomanId, socialMediaFacebook, socialMediaInstagram, socialMediaTicktock, socialMediaTwitter) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:socialMediaWomanId), :socialMediaFacebook,:socialMediaInstagram,:socialMediaTicktock,:socialMediaTwitter)";
        const [result]= await mySqlConnection.execute(mySqlQuery, socialMediaObj) as [ResultSetHeader, RowDataPacket]
        return "socialMedia created successfully"
    } catch (error) {
        throw error
    }
}
