import {Status} from "../../utils/interfaces/Status";
import {Vehicle} from "../../utils/interfaces/Vehicle";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';
import {Woman} from "../interfaces/Woman";

export async function selectVehicleByVehicleId(vehicleId: string) : Promise<Vehicle|null> {
    try {
        console.log("vehicleId: ",vehicleId)
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'SELECT BIN_TO_UUID(vehicleId) as vehicleId, BIN_TO_UUID(vehicleWomanId), vehicleColor, vehicleDescription, vehicleMake, vehicleModel, vehiclePlateNumber, vehicleYear FROM vehicle WHERE vehicleId = UUID_TO_BIN(:vehicleId)'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {vehicleId})
        const vehicle : Array<Vehicle> = result[0] as Array<Vehicle>
        await mySqlConnection.release()
        console.log('vehicle', vehicle)
        return vehicle.length === 1 ? {...vehicle[0]} : null;
    } catch (error) {
        throw error
    }
}

