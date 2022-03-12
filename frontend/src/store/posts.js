import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";





const Posts = createSlice({
name: "poster",
    initialState: [],
    reducers: {
    getAllPosts: (posts,  action ) => {
        return action.payload
    },
        getPostByPostId: (post , action  ) => {
        post.push(action.payload)

}

    }

})


export const {getAllPosts, getPostByPostId } = Posts.actions


export const fetchAllPost = () => async dispatch => {
    const {data} = await httpConfig(`/apis/post`);
    dispatch (getAllPosts(data))
}

export const fetchPostByWomanId = (id) => async (dispatch, getState) => {

    const post = getState().poster.find(element => element.postAppUserId === id)
    if(post === undefined){
        const {data}  = await httpConfig(`/apis/post/${id}`);
        dispatch(getPostByPostId(data))
    }
}


export default Posts.reducer