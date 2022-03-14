import {Status} from "../../utils/interfaces/Status";
import {connect} from "../../utils/database.utils";
import {Vehicle} from "../interfaces/Vehicle";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateVehicle(vehicle: Vehicle) : Promise<string> {
    try {
        console.log("vehicleId: ",vehicle)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'UPDATE vehicle SET vehicleWomanId = UUID_TO_BIN(:vehicleWomanId), vehicleColor = :vehicleColor, vehicleDescription = :vehicleDescription, vehicleMake = :vehicleMake, vehicleModel = :vehicleModel, vehiclePlateNumber = :vehiclePlateNumber, vehicleYear = :vehicleYear WHERE vehicleId = UUID_TO_BIN(:vehicleId)'
        console.log(mySqlQuery)
        const [result]= await mySqlConnection.execute(mySqlQuery, vehicle) as [ResultSetHeader, RowDataPacket]
        await mySqlConnection.release()
        return "Vehicle updated successfully"
    } catch (error) {
        throw error
    }
}

