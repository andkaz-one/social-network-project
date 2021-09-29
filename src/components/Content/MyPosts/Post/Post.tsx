import React from 'react'
import s from './Post.module.css'

type postPropsType = {
    message: string
    like: number
    id: number
}




export const Post = (props: postPropsType) => {

    return (
        <div className={s.item}>
            <img src={'https://cdn-icons-png.flaticon.com/512/3845/3845871.png'}/>
            <div>
                {props.message}
            </div>
            <span>{props.like}</span>
        </div>
    )
}