import React from 'react'
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";
import {AddPostActionType} from "../../../redux/profileReducer";
import {ProfilePropsType} from "../ContentContainer";

type myPostsPropsType = {
    postsData: Array<postsDataPropsData>
    dispatch: (action: AddPostActionType) => void
}

type postsDataPropsData = {
    id: number
    message: string
    like: number
}

export const MyPosts = (props: ProfilePropsType )=> {
    const postItem = props.postsData.postsData.map((p) => {
        return <Post id={p.id} message={p.message} like={p.like}/>
    })

    return (
        <div>
            <div><h2>My Posts</h2></div>
            <NewPost postsData={props.postsData} onClickAddPostHandler={props.onClickAddPostHandler}/>
            {postItem}
        </div>
    )
}