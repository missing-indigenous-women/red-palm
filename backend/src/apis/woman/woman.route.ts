import {Router} from "express"

import {
    getWomanByWomanId,
    postWoman,
    updateWomanByWomanId, deleteWomanByWomanId
} from './woman.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { womanValidator } from './woman.validator';
import {checkSchema} from 'express-validator';
import {check} from 'express-validator';
import {vehicleValidator} from "../vehicle/vehicle.validator";
import {deleteVehicleByVehicleId, updateVehicleByVehicleId} from "../vehicle/vehicle.controller";


export const womanRoute = Router()


womanRoute.route("/:womanId")
    .get( asyncValidatorController([
        check("womanId","please provide a valid womanId").isUUID()
    ]), getWomanByWomanId)
    .put(asyncValidatorController(checkSchema(womanValidator)),updateWomanByWomanId)
    .delete(asyncValidatorController([
        check("woman","please provide a valid womanId").isUUID()
    ]),deleteWomanByWomanId)


womanRoute.route("/")
    .post(asyncValidatorController(checkSchema(womanValidator)), postWoman)
