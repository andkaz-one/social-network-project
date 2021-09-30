import React from 'react'
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";
import {post} from "../../../App";

type myPostsPropsType = {
    postsData: Array<post>
}


/*const postsData = [
    {id: 1, message: 'React', like: 5},
    {id: 2, message: 'TypeScript', like: 20},
]*/


export const MyPosts = ({postsData,...props}: myPostsPropsType )=> {

    const postItem = postsData.map((p) => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        )
    })

    return (
        <div>
            <div><h2>My Posts</h2></div>
            <NewPost/>
            {postItem}
        </div>

    )
}