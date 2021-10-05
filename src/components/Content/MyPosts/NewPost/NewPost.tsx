import React, {ChangeEvent, useState} from 'react'
import s from './NewPost.module.css'

type newPostPropsType = {
    addPostMessage: (postMessage: string) => void
}

export const NewPost = ({addPostMessage, ...props}: newPostPropsType) => {

    let [postMessage, setPostMessage] = useState('')

    const onClickAddPostHandler = () => {
        addPostMessage(postMessage)
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