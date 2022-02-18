import {Router} from "express"
import {indexController} from './index.controller'

export const indexRoutes = Router()

indexRoutes.route("/")
  .get(indexController)