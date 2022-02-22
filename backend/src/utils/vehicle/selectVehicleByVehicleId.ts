import {Status} from "../../utils/interfaces/Status";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectVehicleByVehicleId(vehicleId: string) : Promise<Status[]> {
    try {
        console.log("vehicleId: ",vehicleId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'SELECT BIN_TO_UUID(vehicleId) as vehicleId, vehicleWomanId, vehicleColor, vehicleDescription, vehicleMake, vehicleModel, vehiclePlateNumber, vehicleYear  FROM vehicle WHERE vehicleId = UUID_TO_BIN(:vehicleId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {vehicleId})
        console.log("result0: ", result[0])
        return result[0] as Status[]
    } catch (error) {
        throw error
    }
}

