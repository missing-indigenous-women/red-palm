import {Vehicle} from "../interfaces/Vehicle";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertVehicle(vehicle: Vehicle) : Promise<string> {
    try {
        //console.log(vehicle)
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO vehicle(vehicleId, vehicleWomanId, vehicleColor, vehicleDescription, vehicleMake, vehicleModel, vehiclePlateNumber, vehicleYear) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:vehicleWomanId), :vehicleColor, :vehicleDescription, :vehicleMake, :vehicleModel, :vehiclePlateNumber, :vehicleYear)";
        const [result]= await mySqlConnection.execute(mySqlQuery, vehicle) as [ResultSetHeader, RowDataPacket]
        await mySqlConnection.release()
        return "Vehicle created successfully"
    } catch (error) {
        throw error
    }
}
