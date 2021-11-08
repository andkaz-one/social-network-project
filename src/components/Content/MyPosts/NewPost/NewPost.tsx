import React, {ChangeEvent, useState} from 'react'

import s from './NewPost.module.css'
import {addPostAC, AddPostActionType} from "../../../../redux/profileReducer";

type newPostPropsType = {
    dispatch: (action: AddPostActionType) => void
}

export const NewPost = ({dispatch, ...props}: newPostPropsType) => {

    let [postMessage, setPostMessage] = useState('')

    const onClickAddPostHandler = () => {
        dispatch(addPostAC(postMessage))
        setPostMessage('')
    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPostMessage(event.currentTarget.value)
    }

    return(
        <div>
            <input onChange={onChangeInputHandler} className={s.input} type={"text"} value={postMessage}/>
            <button onClick={onClickAddPostHandler} className={s.button}>Post</button>
        </div>
    )
}