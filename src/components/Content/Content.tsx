import React from 'react'
import s from './Content.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileDescripcion} from "./ProfileDescription/ProfileDescripcion";




type contentPropsType = {
    postsData: Array<postsDataPropsData>
    addPostMessage: (postMessage: string) => void
}

type postsDataPropsData = {
    id: number
    message: string
    like: number
}

export const Content = ({addPostMessage,...props}: contentPropsType) => {

    return(
        <div className={s.content}>
            <img className={s.image} src={'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80'}/>
            <ProfileDescripcion/>
            <MyPosts postsData={props.postsData} addPostMessage={addPostMessage}/>

        </div>
    )
}