import {connect} from  "../database.utils";
import {AppUser} from "../interfaces/AppUser";
import {RowDataPacket} from 'mysql2';



export async function selectAppUserByAppUserActivationToken(appUserActivationToken: string): Promise<AppUser|null> {
	try {
		console.log(appUserActivationToken)
		const mysqlConnection = await connect();
		const mysqlQuery: string = "SELECT BIN_TO_UUID(AppUserId) as appUserId,  appUserActivationToken, appUserDisplayName, appUserEmail, appUserFirstNAme FROM appUser WHERE appUserActivationToken = :appUserActivationToken"
		const result = await mysqlConnection.execute(mysqlQuery ,{appUserActivationToken}) as RowDataPacket[]
		const rows: AppUser[]  = result[0] as AppUser[]
		return rows.length === 1 ? {...rows[0]} : null;
	}  catch (error) {
		throw error
	}
}