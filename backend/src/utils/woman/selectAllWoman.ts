
import {Woman} from "../interfaces/Woman"
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectWomanByWomanId(womanId: string) : Promise<Woman|null> {
    try {
        console.log("womanId", womanId)
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(womanId) AS womanId,womanAliases ,womanDateOfDisappearance,womanDateOfBirth, womanEyeColor, womanFavoriteHangoutPlaces,womanFirstName,womanHairColor, womanHeight,womanHobbiesAndInterests,womanIdentifyingMarks,WomanLastName, womanLastLocation,womanLatitude,womanLongitude, womanPhoto1, womanTribe,womanWeight FROM woman WHERE womanId = UUID_TO_BIN(:womanId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {womanId})
        console.log('result',result)
        const women : Array<Woman> = result[0] as Array<Woman>
        console.log('women.length', women)
        return women.length === 1 ? {...women[0]} : null;

    } catch (error) {
        throw error
    }
}