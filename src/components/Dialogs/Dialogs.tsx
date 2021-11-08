import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

import {TypeOfAC} from '../../redux/store';
import {sendMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";




type dialogsDataPropsType = {
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>
    newMessageText: string
    dispatch: (action: TypeOfAC) => void

}

type dialogType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}



export const Dialogs = (props: dialogsDataPropsType ) => {



    const dialogItem = props.dialogsData.map((d) => {
        return (
            <DialogItem id={d.id} name={d.name}/>
        )
    })

    const messageItem = props.messagesData.map((m) => {
        return (
            <MessageItem id={m.id} message={m.message}/>
        )
    })

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newMessage = event.currentTarget.value
        props.dispatch(updateMessageTextAC(newMessage))
    }
    const onClickSendMessageHandler = () => {
        props.dispatch(sendMessageAC())

    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                <div>{messageItem}</div>
                <div>
                    <input value={props.newMessageText} onChange={onChangeInputHandler} className={s.input} type={"text"}/>
                    <button onClick={onClickSendMessageHandler} className={s.button}>send</button>
                </div>


            </div>


        </div>


    )

}



