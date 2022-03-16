import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)

import {Status} from '../../utils/interfaces/Status';
import {insertWoman} from "../../utils/woman/insertWoman"
import {selectWomanByWomanId} from "../../utils/woman/selectWomanByWomanId";
import {Woman} from "../../utils/interfaces/Woman";
import {updateWoman} from "../../utils/woman/updateWomanByWomanId";
import {deleteWoman} from "../../utils/woman/deleteWomanByWomanId";
import {selectAllWoman} from "../../utils/woman/selectAllWoman";

export async function postWoman(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const { womanId, womanAliases,womanDateOfDisappearance , womanDateOfBirth, womanEyeColor, womanFavoriteHangoutPlaces, womanFirstName, womanHairColor, womanHeight,womanHobbiesAndInterests,womanIdentifyingMarks,womanLastName,womanLastLocation, womanPhoto1, womanTribe, womanWeight   } = request.body;
        let womanLatitude = 35.3300000
        let womanLongitude = -106.650000

        const response2 = await fetch("https://api.geocod.io/v1.7/geocode?api_key=" + process.env.GEOCODIO_SECRET, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(`${womanLastLocation}`),
        });
        const data = await response2.json();
        console.log("data after fetching address lat and long: ", data)
        if (data.results[0].response.results[0] !== undefined) {
            console.log(data.results[0].response.results[0].location);
            womanLatitude = data.results[0].response.results[0].location.lat
            womanLongitude = data.results[0].response.results[0].location.lng
        }

        const woman: Woman = {
            womanId,
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
            // @ts-ignore
            message: `Error Creating woman. ${error.toString()}`,
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
            // @ts-ignore
            message: error.toString(),
            data: []
        })
    }
}


export async function updateWomanByWomanId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const { womanAliases , womanDateOfDisappearance,  womanDateOfBirth, womanEyeColor,womanFavoriteHangoutPlaces,womanFirstName,womanHairColor,womanHeight,womanHobbiesAndInterests,womanIdentifyingMarks,womanLastName, womanLastLocation,  womanLatitude,womanLongitude,womanPhoto1, womanTribe,womanWeight } = request.body;
        const     {womanId} = request.params
        console.log(request.body)
        const woman: Woman = {
            womanId ,
            womanAliases ,
            womanDateOfDisappearance,
            womanDateOfBirth ,
            womanEyeColor,
            womanFavoriteHangoutPlaces ,
            womanFirstName ,
            womanHairColor ,
            womanHeight,
            womanHobbiesAndInterests,
            womanIdentifyingMarks,
            womanLastName ,
            womanLastLocation,
            womanLatitude,
            womanLongitude ,
            womanPhoto1 ,
            womanTribe,
            womanWeight
        }

        const data  = await updateWoman(woman)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error updating woman. ${error.toString()}`,
            data: []
        })
    }
}

export async function deleteWomanByWomanId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {womanId} = request.params
        const data  = await deleteWoman(womanId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error getting vehicle. ${error.toString()}`,
            data: []
        })
    }
}

export async function getAllWoman(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const data  = await selectAllWoman()
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error getting all women. ${error.toString()}`,
            data: []
        })
    }
}