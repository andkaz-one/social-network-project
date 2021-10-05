import React from 'react'
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";



type myPostsPropsType = {
    postsData: Array<postsDataPropsData>
    addPostMessage: (postMessage: string) => void
}

type postsDataPropsData = {
    id: number
    message: string
    like: number
}




export const MyPosts = ({addPostMessage, ...props}: myPostsPropsType )=> {

    const postItem = props.postsData.map((p) => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        )
    })

    return (
        <div>
            <div><h2>My Posts</h2></div>
            <NewPost addPostMessage={addPostMessage}/>
            {postItem}
        </div>

    )
}