import {Router} from "express"

import {
    getAppUserByAppUserId,
    postAppUser
} from './appUser.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {appUserValidator} from './appUser.validator';
import {checkSchema} from 'express-validator';
import {check} from 'express-validator';

export const appUserRoutes = Router()


appUserRoutes.route("/:appUserId")
    .get( asyncValidatorController([
        check("appUserId","please provide a valid appUserId").isUUID()
    ]), getAppUserByAppUserId)

appUserRoutes.route("/")
    .post(asyncValidatorController(checkSchema(appUserValidator)), postAppUser);
