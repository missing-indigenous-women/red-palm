import {Request, Response} from 'express';



import {Status} from '../../../utils/interfaces/Status';
import {Post} from



import {insertPosr} from "../../../utils/post/insertPost"
import {selectStatusByStatusId} from "../../../utils/status/selectStatusByStatusId"

export async function postPost(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {postAppuserId,postWomanId,postDate, postText} = request.body;
        console.log(request.body)
        const post: post = {
            postId:  null,
            postAppUserId ,
            postWomanId ,
            postDate ,
            postText
        }
        const result = await insertPost (post)
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

export async function getPostByPostId(request : Request, response: Response): Promise<Response<HttpStatus>>{
    try {
        const     {postId} = request.params
        const data  = await selectpostByPostId(postId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "Error getting status try again later.",
            data: []
        })
    }
}

