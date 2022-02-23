import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Post} from '../../utils/interfaces/Post';
import {Status} from '../../utils/interfaces/Status';
import {insertPost} from "../../utils/post/insertPost";
import {SocialMedia} from "../../utils/interfaces/SocialMedia";
import {selectPostByPostId} from "../../utils/post/selectPostByPostId";
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
