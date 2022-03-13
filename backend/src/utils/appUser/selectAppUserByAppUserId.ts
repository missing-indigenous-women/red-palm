import {AppUser} from "../interfaces/AppUser";
import {Status} from "../interfaces/Status";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectAppUserByAppUserId(appUserId: string) : Promise<AppUser|null> {
    try {
        console.log("appUserId", appUserId)
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(appUserId) AS appUserId,appUserActivationToken, appUserDisplayName,appUserEmail,appUserFirstName, appUserHash, appUserLastName FROM appUser WHERE appUserId = UUID_TO_BIN (:appUserId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {appUserId})
        const appUsers : Array<AppUser> = result[0] as Array<AppUser>
        await mySqlConnection.release()
        return appUsers.length === 1 ? {...appUsers[0]} : null;

    } catch (error) {
        throw error
    }
}

//TODO come back
