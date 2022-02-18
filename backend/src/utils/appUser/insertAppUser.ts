import {AppUser} from "../interfaces/appUser";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertAppUser(appUser:AppUser) : Promise<string> {
    try {
        //console.log(vehicle)
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO appUser(AppUserId, appUserActivationToken,appUserDisplayName,appUserEmail,appUserFirstName,appUserHash, appUserLastName) VALUES(UUID_TO_BIN(UUID()), :appUserId, :appUserActivationToken, :appUserDisplayName, : appUserEmail, :appUserFirstName, :appUserHash, :AppUserLastName)";
        const [result]= await mySqlConnection.execute(mySqlQuery, appUser) as [ResultSetHeader, RowDataPacket]
        return "appUser created successfully"
    } catch (error) {
        throw error
    }
}
