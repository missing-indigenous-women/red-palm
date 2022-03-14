import {Status} from "../../utils/interfaces/Status";
import {connect} from "../../utils/database.utils";
import {Vehicle} from "../interfaces/Vehicle";
import {ResultSetHeader, RowDataPacket} from 'mysql2';
import {Woman} from "../interfaces/Woman";

export async function updateWoman(woman: Woman) : Promise<string> {
    try {
        console.log("womanId: ",woman)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'UPDATE woman SET womanId = UUID_TO_BIN(:womanId), womanAliases = :womanAliases, womanDateOfDisappearance = :womanDateOfDisappearance, womanDateOfBirth = :womanDateOfBirth, womanEyeColor = :womanEyeColor, womanFavoriteHangoutPlaces = :womanFavoriteHangoutPlaces, womanFirstName = :womanFirstName, womanHairColor = :womanHairColor,womanHeight = :womanHeight, womanHobbiesAndInterests = :womanHobbiesAndInterests,  womanIdentifyingMarks = :womanIdentifyingMarks, womanLastName = :womanLastName, womanLastLocation = :womanLastLocation, womanLatitude = :womanLatitude,   womanLongitude = :womanLongitude, womanPhoto1 =:womanPhoto1,  womanTribe =:womanTribe,   womanWeight = :womanWeight  WHERE womanId = UUID_TO_BIN(:womanId)'
        console.log(mySqlQuery)
        const [result]= await mySqlConnection.execute(mySqlQuery, woman) as [ResultSetHeader, RowDataPacket]
        await mySqlConnection.release()
        return "woman updated successfully"
    } catch (error) {
        throw error
    }
}

//const mySqlQuery:string = 'UPDATE woman SET womanId = UUID_TO_BIN(:womanId), womanAliases = :womanAliases, womanDateOfDisappearance = :womanDateOfDisappearance, womanDateOfBirth = :womanDateOfBirth, womanEyeColor = :womanEyeColor, womanFavoriteHangoutPlaces = :womanFavoriteHangoutPlaces, womanFirstName = :womanFirstName, womanHairColor = :womanHairColor,womanHeight = :womanHeight, womanHobbiesAndInterests = :womanHobbiesAndInterests,  womanIdentifyingMarks = :womanIdentifyingMarks, womanLastName = :womanLastName, womanLastLocation = :womanLastLocation, womanLatitude = :womanLatitude,   womanLongitude = :womanLongitude, womanPhoto1 =:womanPhoto1,  womanTribe =:womanTribe,   womanWeight = :womanWeight  WHERE womanId = UUID_TO_BIN(:womanId)'