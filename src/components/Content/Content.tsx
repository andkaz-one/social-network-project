import React from 'react'
import s from './Content.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

import {ProfileDescripcion} from "./ProfileDescription/ProfileDescripcion";


export const Content = () => {

    return(
        <div className={s.content}>
            <img className={s.image} src={'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80'}/>
            <ProfileDescripcion/>
            <MyPosts/>

        </div>
    )
}