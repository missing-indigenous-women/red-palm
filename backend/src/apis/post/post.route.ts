import {Router} from "express"

import {
    getPostByPostId,
    postPost,
    getAllPost,
    getPostsByWomanId
} from './post.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { postValidator } from './post.validator';
import {checkSchema} from 'express-validator';
import {check} from 'express-validator';
import {deletePostByPostId, updatePostByPostId} from "../post/post.controller";
import {getPostByWomanId} from "../../utils/post/getPostByWomanId";

export const postRoute = Router()


postRoute.route("/:postId")
    .get( asyncValidatorController([
        check("postId","please provide a valid postId").isUUID()
    ]), getPostByPostId)
    .put(asyncValidatorController(checkSchema(postValidator)),updatePostByPostId)
    .delete(asyncValidatorController([
        check("postId","please provide a valid postId").isUUID()
    ]),deletePostByPostId)

postRoute.route("/")
    .get( getAllPost)
    .post(asyncValidatorController(checkSchema(postValidator)), postPost);


postRoute.route("/postWomanId/:postWomanId")
    .get( asyncValidatorController([
        check("postWomanId","please provide a valid postId").isUUID()
    ]), getPostsByWomanId)
