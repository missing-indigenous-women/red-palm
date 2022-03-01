import {Status} from "../../utils/interfaces/Status";
import {SocialMedia} from "../../utils/interfaces/SocialMedia";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectAllSocialMedia() : Promise<SocialMedia|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'SELECT BIN_TO_UUID(socialMediaId) as socialMediaId, BIN_TO_UUID(socialMediaWomanId) as socialMediaWomanId, socialMediaFacebook, socialMediaInstagram, socialMediaTicktock, socialMediaTwitter FROM socialMedia'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery)
        const socialMedia : Array<SocialMedia> = result[0] as Array<SocialMedia>
        console.log('socialMedia', socialMedia)
        return socialMedia.length === 1 ? {...socialMedia[0]} : null;
    } catch (error) {
        throw error
    }
}

