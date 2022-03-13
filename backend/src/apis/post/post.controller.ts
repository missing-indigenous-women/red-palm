import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {insertPost} from "../../utils/post/insertPost"
import {selectPostByPostId} from "../../utils/post/selectPostByPostId";
import {selectAllPost} from "../../utils/post/selectAllPost";
import {Post} from "../../utils/interfaces/Post";
import {updatePost} from "../../utils/post/updatePostByPostId";
import {deletePost} from "../../utils/post/deletePostByPostId";
import {getPostByWomanId} from "../../utils/post/getPostByWomanId";

export async function postPost(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {postAppUserId, postWomanId, postText} = request.body;

        const post: Post = {
            postId: null,
            postAppUserId,
            postWomanId,
            postDate: null,
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

export async function getAllPost(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const data  = await selectAllPost()
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "Error getting post try again later.",
            data: []
        })
    }
}

export async function updatePostByPostId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const { postWomanId, postAppUserId, postDate, postText } = request.body;
        const     {postId} = request.params
        //console.log(request.body)
        const post: Post = {
            postId,
            postAppUserId,
            postWomanId,
            postDate,
            postText
        }
        const data  = await updatePost(post)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error updating post. ${error.toString()}`,
            data: []
        })
    }
}

export async function deletePostByPostId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {postId} = request.params
        const data  = await deletePost(postId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            // @ts-ignore
            message: `Error getting post. ${error.toString()}`,
            data: []
        })
    }
}

export async function getPostsByWomanId(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {postWomanId} = request.params
        const data  = await getPostByWomanId(postWomanId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        console.error(error)
        return response.json({
            status: 500,
            message: "Error getting status try again later.",
            data: []
        })
    }
}