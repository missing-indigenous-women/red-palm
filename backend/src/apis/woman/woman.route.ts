import {Router} from "express"

import {
    getWomanByWomanId,
    womanWoman
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

womanRoute.route("/")
    .post(asyncValidatorController(checkSchema(womanValidator)), womanWoman);
