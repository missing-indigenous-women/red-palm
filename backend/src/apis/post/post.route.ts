import {Router} from "express"

import {
    getPostByPostId,
    postPost
} from './post.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { postValidator } from './post.validator';
import {checkSchema} from 'express-validator';
import {check} from 'express-validator';

export const postRoutes = Router()


postRoutes.route("/:postId")
    .get( asyncValidatorController([
        check("postId","please provide a valid postId").isUUID()
    ]), getPostByPostId)

postRoutes.route("/")
    .post(asyncValidatorController(checkSchema(postValidator)), postPost);
