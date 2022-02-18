import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)

import {Status} from '../../utils/interfaces/Status';
import {insertWoman} from "../../utils/woman/insertWoman"
import {selectWomanByWomanId} from "../../utils/woman/selectWomanByWomanId";
import {Woman} from "../../utils/interfaces/Woman";
export async function postWoman(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const { womanAliases,womanDateOfDisappearance , womanDateOfBirth, womanEyeColor, womanFavoriteHangoutPlaces, womanFirstName, womanHairColor, womanHeight,womanHobbiesAndInterests,womanIdentifyingMarks,womanLastName,womanLastLocation, womanLatitude, womanLongitude,  womanPhoto1, womanTribe, womanWeight   } = request.body;

        const woman: Woman = {
            womanId: null ,
            womanAliases ,
            womanDateOfDisappearance,
            womanDateOfBirth,
            womanEyeColor,
            womanFavoriteHangoutPlaces,
            womanFirstName ,
            womanHairColor ,
            womanHeight,
            womanHobbiesAndInterests,
            womanIdentifyingMarks,
            womanLastName ,
            womanLastLocation ,
            womanLatitude,
            womanLongitude ,
            womanPhoto1,
            womanTribe ,
            womanWeight
        }
        const result = await insertWoman (woman)
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
            message: "Error Creating status try again later.",
            data: null
        });
    }
}
export async function getWomanByWomanId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {womanId} = request.params
        const data  = await selectWomanByWomanId(womanId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "Error getting status try again later.",
            data: []
        })
    }
}
