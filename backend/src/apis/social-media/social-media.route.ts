import {Router} from "express"

import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {checkSchema} from 'express-validator';
import {check} from 'express-validator';
import {socialMediaValidator} from "./social-media.validator";
import {
    deleteSocialMediaBySocialMediaId,
    getSocialMediaBySocialMediaId,
    postSocialMedia,
    updateSocialMediaBySocialMediaId,
    getAllSocialMedia
} from "./social-media.controller";

export const socialMediaRoute = Router()


socialMediaRoute.route("/")
    .get(getAllSocialMedia)
    .post(asyncValidatorController(checkSchema(socialMediaValidator)),postSocialMedia)

socialMediaRoute.route("/:socialMediaId")
    .get(asyncValidatorController([
        check("socialMediaId","please provide a valid socialMediaId").isUUID()
    ]),getSocialMediaBySocialMediaId)
    .put(asyncValidatorController(checkSchema(socialMediaValidator)),updateSocialMediaBySocialMediaId)
    .delete(asyncValidatorController([
        check("socialMediaId","please provide a valid socialMediaId").isUUID()
    ]),deleteSocialMediaBySocialMediaId)