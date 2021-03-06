
import {Woman} from "../interfaces/Woman"
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectAllWoman() : Promise<Array<Woman>|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(womanId) AS womanId,womanAliases ,womanDateOfDisappearance,womanDateOfBirth, womanEyeColor, womanFavoriteHangoutPlaces,womanFirstName,womanHairColor, womanHeight,womanHobbiesAndInterests,womanIdentifyingMarks,womanLastName, womanLastLocation,womanLatitude,womanLongitude, womanPhoto1, womanTribe,womanWeight FROM woman'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery)
        console.log('result',result)
        const women : Array<Woman> = result[0] as Array<Woman>
        await mySqlConnection.release()
        console.log('women.length', women)
        return women.length >= 1 ? [...women] : null;

    } catch (error) {
        throw error
    }
}