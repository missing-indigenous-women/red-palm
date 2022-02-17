import {Router} from "express"
import {getVehicleByVehicleId} from './vehicle.controller'
import {postVehicle} from './vehicle.controller'
import {updateVehicleByVehicleId} from './vehicle.controller'
import {deleteVehicleByVehicleId} from './vehicle.controller'

export const vehicleRoute = Router()

vehicleRoute.route("/")
    .post(postVehicle)

vehicleRoute.route("/:vehicleId")
    .get(getVehicleByVehicleId)
    .put(updateVehicleByVehicleId)
    .delete(deleteVehicleByVehicleId)