import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Post} from '../../utils/interfaces/Post';
import {Status} from '../../utils/interfaces/Status';
import {insertPost} from "../../utils/post/insertPost"
import {selectPostByPostId} from "../../utils/post/selectPostByPostId";
export async function postPost(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {postAppUserId, postWomanId, postDate, postText} = request.body;

        const post: Post = {
            postId: null,
            postAppUserId,
            postWomanId,
            postDate,
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
export async function getPostByPostId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {postId} = request.params
        const data  = await selectPostByPostId(postId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "Error getting status try again later.",
            data: []
        })
    }
}
