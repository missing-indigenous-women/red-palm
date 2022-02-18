import {Router} from "express"
import {getAppUserByAppUserId,} from './appUser.controller'
import {postAppUser} from './appUser.controller'
import {updateAppUserByAppUserId} from './appUser.controller'
import {deleteAppUserByAppUserId} from './appUser.controller'
export const appUserRoute = Router()


appUserRoute.route("/:appUserId")
    .get(getAppUserByAppUserId)
    .put(updateAppUserByAppUserId)
    .delete(deleteAppUserByAppUserId)
appUserRoute.route("/")
    .post( postAppUser);
