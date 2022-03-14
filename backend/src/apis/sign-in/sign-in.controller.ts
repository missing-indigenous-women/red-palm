import { Request, Response} from 'express';
import "express-session";
import { v4 as uuid } from 'uuid';
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {AppUser} from "../../utils/interfaces/AppUser";
import {selectAppUserByAppUserEmail} from "../../utils/appUser/selectAppUserByAppUserEmail";


export async function signInController(request: Request, response: Response): Promise<Response | undefined> {

    const {appUserEmail} = request.body
    const mySqlResult: AppUser | null = await selectAppUserByAppUserEmail(appUserEmail);
    const isEmailValid: boolean = mySqlResult ? true : false

    try {
        const authenticate = async () => {

            const {appUserPassword} = request.body;

            // @ts-ignore isEmailValid determines mySqlResult will not be null
            const {appUserId,appUserActivationToken, appUserDisplayName, appUserEmail, appUserFirstName , appUserHash , appUserLastName, appUserAvatarUrl } = mySqlResult

            const appUser: AppUser = {
                appUserId,
                appUserActivationToken,
                appUserDisplayName,
                appUserEmail,
                appUserFirstName ,
                appUserHash,
                appUserLastName,
                appUserAvatarUrl
            }



            const signature: string = uuid();
            const authorization: string = generateJwt({
                appUserId,
                appUserActivationToken,
                appUserDisplayName,
                appUserEmail,
                appUserFirstName ,
                appUserHash,
                appUserLastName
            }, signature);

            const signInFailed = (message: string) => response.json({
                status: 400,
                data: null,
                message
            });

            const signInSuccessful = () => {

                // commented out for testing purposes
                // if(appUser.appUserActivationToken !== null) {
                // 	signInFailed("please activate your account")
                // }

                if (request.session) {
                    //@ts-ignore
                    request.session.appUser = appUser;
                    //@ts-ignore
                    request.session.jwt = authorization;
                    //@ts-ignore
                    request.session.signature = signature;
                }

                response.header({
                    authorization
                });

                return response.json({status: 200, data: null, message: "sign in successful"})
            };

            const isPasswordValid: boolean = appUser && await validatePassword(appUser.appUserHash, appUserPassword);

            return isPasswordValid ? signInSuccessful() : signInFailed("Invalid email or password");
        }

        return isEmailValid ? authenticate() : response.json({status: 400, data: null, message: "Invalid email or password"})

    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }
}
