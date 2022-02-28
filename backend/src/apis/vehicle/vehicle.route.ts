import {Router} from "express"
import {getVehicleByVehicleId} from './vehicle.controller'
import {postVehicle} from './vehicle.controller'
import {updateVehicleByVehicleId} from './vehicle.controller'
import {getAllVehicle} from './vehicle.controller'
import {deleteVehicleByVehicleId} from './vehicle.controller'
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {vehicleValidator} from "./vehicle.validator";

export const vehicleRoute = Router()

vehicleRoute.route("/")
    .get(getAllVehicle)
    .post(asyncValidatorController(checkSchema(vehicleValidator)),postVehicle)

vehicleRoute.route("/:vehicleId")
    .get(asyncValidatorController([
        check("vehicleId","please provide a valid vehicleId").isUUID()
    ]),getVehicleByVehicleId)
    .put(asyncValidatorController(checkSchema(vehicleValidator)),updateVehicleByVehicleId)
    .delete(asyncValidatorController([
        check("vehicleId","please provide a valid vehicleId").isUUID()
    ]),deleteVehicleByVehicleId)