import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {AppUser} from '../../utils/interfaces/AppUser';
import {insertAppUser} from "../../utils/appUser/insertAppUser";
import {selectAppUserByAppUserId} from "../../utils/appUser/selectAppUserByAppUserId";
import {updateAppUser} from '../../utils/appUser/updateAppUser';
import {deleteAppUser} from '../../utils/appUser/deleteAppUserByAppUserId';
import {Vehicle} from "../../utils/interfaces/Vehicle";

export async function postAppUser(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {  appUserActivationToken, appUserDisplayName, appUserEmail, appUserFirstName, appUserHash, appUserLastName} = request.body;

        const appUser: AppUser = {
            appUserId: null,
            appUserActivationToken,
            appUserDisplayName,
            appUserEmail,
            appUserFirstName,
            appUserHash,
            appUserLastName

        }
        const result = await insertAppUser(appUser)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error:any) {
        console.error(error.message)
        return  response.json({
            status: 500,
            // @ts-ignore
            message: `Error Creating appUser try again later.${error.toString()}`,
            data: null
        });
    }
}
export async function getAppUserByAppUserId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {appUserId} = request.params
        const data  = await selectAppUserByAppUserId(appUserId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error getting status try again later.${error.toString()}`,
            data: []
        })
    }
}

export async function updateAppUserByAppUserId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const { appUserActivationToken, appUserDisplayName, appUserEmail, appUserFirstName, appUserHash, appUserLastName } = request.body;
        const     {appUserId} = request.params
        const appUser: AppUser = {
            appUserId,
            appUserActivationToken,
            appUserDisplayName,
            appUserEmail,
            appUserFirstName,
            appUserHash,
            appUserLastName

        }
        const data  = await updateAppUser(appUser)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error getting appUser try again later.${error.toString()}`,
            data: []
        })
    }
}

//TODO: come back to this
export async function deleteAppUserByAppUserId(request : Request, response: Response): Promise<Response<Status>>{

    try {
        const     {appUserId} = request.params
        const data  = await deleteAppUser(appUserId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error getting appUser try again later.${error.toString()}`,
            data: []
        })
    }
}