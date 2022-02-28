import {Status} from "../../utils/interfaces/Status";
import {connect} from "../../utils/database.utils";
import {RowDataPacket} from 'mysql2';

export async function deleteVehicle(vehicleId: string) : Promise<string> {
    try {
        console.log("vehicleId: ",vehicleId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'DELETE FROM vehicle WHERE vehicleId = UUID_TO_BIN(:vehicleId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {vehicleId})
        return "Vehicle deleted successfully"
    } catch (error) {
        throw error
    }
}

