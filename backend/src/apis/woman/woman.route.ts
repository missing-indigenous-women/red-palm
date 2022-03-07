import {Router} from "express"

import {
    getWomanByWomanId,
    postWoman,
    updateWomanByWomanId,
    deleteWomanByWomanId,
    getAllWoman
} from './woman.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { womanValidator } from './woman.validator';
import {checkSchema} from 'express-validator';
import {check} from 'express-validator';

export const womanRoute = Router()


womanRoute.route("/:womanId")
    .get( asyncValidatorController([
        check("womanId","please provide a valid womanId").isUUID()
    ]), getWomanByWomanId)
    .put(asyncValidatorController(checkSchema(womanValidator)),updateWomanByWomanId)
    .delete(asyncValidatorController([
        check("womanId","please provide a valid womanId").isUUID()
    ]),deleteWomanByWomanId)


womanRoute.route("/")
    .get(getAllWoman)
    .post(asyncValidatorController(checkSchema(womanValidator)), postWoman)
