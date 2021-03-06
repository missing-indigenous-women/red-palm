import {Status} from "../../utils/interfaces/Status";
import {Vehicle} from "../../utils/interfaces/Vehicle";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';
import {Woman} from "../interfaces/Woman";

export async function selectAllVehicle() : Promise<Array<Vehicle>|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery:string = 'SELECT BIN_TO_UUID(vehicleId) as vehicleId, BIN_TO_UUID(vehicleWomanId) as vehicleWomanId, vehicleColor, vehicleDescription, vehicleMake, vehicleModel, vehiclePlateNumber, vehicleYear FROM vehicle'
        console.log(mySqlQuery)
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery)
        const vehicle : Array<Vehicle> = result[0] as Array<Vehicle>
        await mySqlConnection.release()
        console.log('vehicle', vehicle)
        return vehicle.length >= 1 ? [...vehicle] : null;
    } catch (error) {
        throw error
    }
}

