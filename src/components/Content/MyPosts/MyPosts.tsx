import React from 'react'
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";


export const MyPosts = () => {

    return (
        <div>
            <div><h2>My Posts</h2></div>
            <NewPost/>
            <Post message={'React'} like={'like 5'}/>
            <Post message={'TypeScript'} like={'like 20'}/>

        </div>

    )
}