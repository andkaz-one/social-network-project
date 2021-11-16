import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import { DialogsPropsType } from './DialogsContainer';
import dialogsReducer from "../../redux/dialogsReducer";





/*type PropsType = {


    dialogsData: InitialStateType
    messagesData: InitialStateType
    newMessageText: InitialStateType


}*/

/*type dialogType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}*/



export const Dialogs = (props: DialogsPropsType) => {



    const dialogItem = props.dialogsData.dialogsData.map((d) => {
        return (
            <DialogItem id={d.id} name={d.name}/>
        )
    })

    const messageItem = props.dialogsData.messagesData.map((m) => {
        return (
            <MessageItem id={m.id} message={m.message}/>
        )
        }
    )

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newMessage = event.currentTarget.value
        props.onChangeInputHandler(newMessage)
        /*props.dispatch(updateMessageTextAC(newMessage))*/
    }
    const onClickSendMessageHandler = () => {
        props.onClickSendMessageHandler()
        /*props.dispatch(sendMessageAC())*/

    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                <div>{messageItem}</div>
                <div>
                    <input value={props.newMessageText.newMessageText} onChange={onChangeInputHandler} className={s.input} type={"text"}/>
                    <button onClick={onClickSendMessageHandler} className={s.button}>send</button>
                </div>


            </div>


        </div>


    )

}



