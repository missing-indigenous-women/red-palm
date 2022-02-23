import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Post} from '../../utils/interfaces/Post';
import {Status} from '../../utils/interfaces/Status';
import {insertPost} from "../../utils/post/insertPost";
import {SocialMedia} from "../../utils/interfaces/SocialMedia";
import {selectSocialMediaBySocialMediaId} from "../../utils/socialMedia/selectSocialMediaBySocialMediaId";
import {updateSocialMedia} from "../../utils/socialMedia/updateSocialMediaBySocialMediaId";
import {deleteSocialMedia} from "../../utils/socialMedia/deleteSocialMediaBySocialMediaId";
import {insertSocialMedia} from "../../utils/socialMedia/insertSocialMedia";
export async function postSocialMedia(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {socialMediaWomanId, socialMediaFacebook, socialMediaInstagram, socialMediaTicktock, socialMediaTwitter} = request.body;

        const socialMediaObj: SocialMedia= {
            socialMediaId: null,
            socialMediaWomanId,
            socialMediaFacebook,
            socialMediaInstagram,
            socialMediaTicktock,
            socialMediaTwitter
        }
        const result = await insertSocialMedia (socialMediaObj)
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
            message: "Error Creating Social Media try again later.",
            data: null
        });
    }
}
export async function getSocialMediaBySocialMediaId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {socialMediaId} = request.params
        const data  = await selectSocialMediaBySocialMediaId(socialMediaId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "Error getting Social Media try again later.",
            data: []
        })
    }
}
export async function updateSocialMediaBySocialMediaId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const { socialMediaWomanId,
            socialMediaFacebook,
            socialMediaInstagram,
            socialMediaTicktock,
            socialMediaTwitter } = request.body;
        const     {socialMediaId} = request.params
        //console.log(request.body)
        const socialMedia: SocialMedia = {
            socialMediaId,
            socialMediaWomanId,
            socialMediaFacebook,
            socialMediaInstagram,
            socialMediaTicktock,
            socialMediaTwitter
        }
        const data  = await updateSocialMedia(socialMedia)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error updating socialMedia. ${error.toString()}`,
            data: []
        })
    }
}

export async function deleteSocialMediaBySocialMediaId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {socialMediaId} = request.params
        const data  = await deleteSocialMedia(socialMediaId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error getting socialMedia. ${error.toString()}`,
            data: []
        })
    }
}