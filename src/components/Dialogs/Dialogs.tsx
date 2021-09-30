import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialog, message} from "../../App";



type propsDialogsType = {
    dialogsData: Array<dialog>
    messagesData:Array<message>
}



export const Dialogs = ({dialogsData, messagesData,...props}: propsDialogsType ) => {

    const dialogItem = dialogsData.map((d) => {
        return (
            <DialogItem id={d.id} name={d.name}/>
        )
    })

    const messageItem = messagesData.map((m) => {
        return (
            <MessageItem id={m.id} message={m.message}/>
        )
    })

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messageItem}
            </div>
        </div>


    )

}



