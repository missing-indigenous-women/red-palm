import {connect} from "../database.utils";
import {AppUser} from "../interfaces/AppUser";
import {RowDataPacket} from 'mysql2';

export async function selectAppUserByAppUserEmail(appUserEmail: string): Promise<AppUser|null>  {
	try {
		const mysqlConnection = await connect();
		const sqlQuery: string = "SELECT BIN_TO_UUID(appUserId) as appUserId, appUserActivationToken, appUserDisplayName, appUserEmail, appUserFirstName, appUserHash, appUserLastName FROM appUser WHERE appUserEmail = :appUserEmail"
		const result = await mysqlConnection.execute(sqlQuery, {appUserEmail}) as RowDataPacket[]
		const rows: AppUser[]  = result[0] as AppUser[]
		return rows.length === 1 ? {...rows[0]} : null;
	} catch (error) {
		throw error
	}
}
