
import {AppUser} from "../interfaces/appUser";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateAppUser(appUser: AppUser): Promise<string>  {
	try {
		const mysqlConnection = await connect();
		const query : string = 'UPDATE appUser SET appUserActivationToken = :appUserActivationToken, appUserDisplayName = :appUserDisplayName, appUserEmail = :appUserEmail, appUserFirstName = :appUserFirstname,  appUserHash = :appUserHAsh WHERE appUserId = UUID_TO_BIN(:appUserId)';
		await mysqlConnection.execute(query, appUser)
		return 'Profile successfully updated'
	} catch (error) {
		throw error
	}
}