import {NextFunction, Request, Response} from "express";


import {updateAppUser} from "../../utils/appUser/updateAppUser";
import {Status} from '../../utils/interfaces/Status';
import {selectAppUserByAppUserActivationToken} from "../../utils/appUser/selectAppUserByAppUserIdActivationToken";
import {AppUser} from "../../utils/interfaces/AppUser";


export async function activationController(request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
  try {
    const {activation} = request.params
    const appUser = await selectAppUserByAppUserActivationToken(activation)
    console.log(appUser)

    const activationFailed = () : Response => response.json({
      status: 400,
      data: null,
      message: "Account activation has failed. Have you already activated this account"
    });

    const activationSucceeded = async (appUser: AppUser):Promise<Response> => {
      const updatedAppUser = {...appUser, appUserActivationToken: null}
      console.log('show me:', updatedAppUser)
      await updateAppUser(updatedAppUser)
      return response.json({
        status: 200,
        data: null,
        message: "Account activation was successful"
      });
    }

    return appUser ? await activationSucceeded(appUser) : activationFailed()

  } catch (error: any) {
    return response.json({status: 500, data: null, message: error.message})
  }
}
