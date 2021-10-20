import React, {ChangeEvent, useState} from 'react'
import {addPostAC, AddPostActionType} from '../../../../redux/State'
import s from './NewPost.module.css'

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
            <input onChange={onChangeInputHandler} className={s.input} type={"text"}/>
            <button onClick={onClickAddPostHandler} className={s.button}>Post</button>
        </div>

    )
}