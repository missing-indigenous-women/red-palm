import {Router} from "express"

import {
    getSocialMediaBySocialMediaId,
    postSocialMedia
} from './social-media.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { socialMediaValidator } from './social-media.validator';
import {checkSchema} from 'express-validator';
import {check} from 'express-validator';

export const socialMediaRoute = Router()


socialMediaRoute.route("/:socialMediaId")
    .get( asyncValidatorController([
        check("socialMediaId","please provide a valid socialMediaId").isUUID()
    ]), getSocialMediaBySocialMediaId)

socialMediaRoute.route("/")
    .post(asyncValidatorController(checkSchema(socialMediaValidator)), postSocialMedia);
