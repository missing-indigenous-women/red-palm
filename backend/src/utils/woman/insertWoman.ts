import {Woman} from "../interfaces/Woman";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertWoman(woman: Woman) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO woman(womanId,womanAliases , womanDateOfDisappearance,  womanDateOfBirth, womanEyeColor,womanFavoriteHangoutPlaces,womanFirstName,womanHairColor,womanHeight,womanHobbiesAndInterests,womanIdentifyingMarks,womanLastName, womanLastLocation,  womanLatitude,womanLongitude,womanPhoto1, womanTribe,womanWeight) VALUES(UUID_TO_BIN(UUID()), :womanAliases, :womanDateOfDisappearance,:womanDateOfDisappearance, :womanDateOfBirth, :womanEyeColor, :womanFavoriteHangoutPlaces,:womanFirstName ,:womanHairColor ,:womanHeight ,:womanHobbiesAndInterests ,:womanIdentifyingMarks,:womanLastName,:womanLastLocation, :womanLatitude,:womanLongitude,:womanPhoto1,:womanTribe,:womanWeight )";

        const [result]= await mySqlConnection.execute(mySqlQuery, woman) as [ResultSetHeader, RowDataPacket]
        return "woman created successfully"
    } catch (error) {
        throw error
    }
}
