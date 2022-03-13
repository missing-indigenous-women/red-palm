import {connect} from "../database.utils";
import {AppUser} from "../interfaces/AppUser";

export async function insertAppUser(appUser:AppUser) : Promise<string> {
    try {

        const mySqlConnection = await connect()
        const query : string = "INSERT INTO appUser(appUserId, appUserActivationToken,appUserDisplayName,appUserEmail,appUserFirstName,appUserHash, appUserLastName, appUserAvatarUrl) VALUES (UUID_TO_BIN(UUID()), :appUserActivationToken, :appUserDisplayName, :appUserEmail, :appUserFirstName, :appUserHash, :appUserLastName, :appUserAvatarUrl)";
        await mySqlConnection.execute(query, appUser);
        await mySqlConnection.release()
        return "appUser created successfully"
    } catch (error) {
        throw error
    }
}

