import {Status} from "../../utils/interfaces/Status";
import {SocialMedia} from "../../utils/interfaces/SocialMedia";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectSocialMediaBySocialMediaId(socialMediaId: string) : Promise<SocialMedia|null> {
    try {
        console.log("socialMediaId: ",socialMediaId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'SELECT BIN_TO_UUID(socialMediaId) as socialMediaId, BIN_TO_UUID(socialMediaWomanId) as socialMediaWomanId, socialMediaFacebook, socialMediaInstagram, socialMediaTicktock, socialMediaTwitter FROM socialMedia WHERE socialMediaId = UUID_TO_BIN(:socialMediaId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {socialMediaId})
        const socialMedia : Array<SocialMedia> = result[0] as Array<SocialMedia>
        await mySqlConnection.release()
        console.log('socialMedia', socialMedia)
        return socialMedia.length === 1 ? {...socialMedia[0]} : null;
    } catch (error) {
        throw error
    }
}

