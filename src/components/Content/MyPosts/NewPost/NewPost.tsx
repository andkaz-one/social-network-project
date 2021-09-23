import React from 'react'
import s from './NewPost.module.css'


export const NewPost = () => {

    return(
        <div>
            <input className={s.input} type={"text"}/>
            <button className={s.button}>Post</button>
        </div>

    )
}