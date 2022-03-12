import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";





const Posts = createSlice({
name: "post",
    initialState: [],
    reducers: {
    setPosts: (posts,  action ) => {
        return action.payload
    },
        getPostByPostId: (post , action  ) => {
        post.push(action.payload)

}

    }

})


export const {setPosts, } = Posts.actions


export const fetchPostsByWomanId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/post/postWomanId/${id}`);
    dispatch (setPosts(data))
}




export default Posts.reducer