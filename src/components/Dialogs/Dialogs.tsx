import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const dialogsData = [
    {id: 1, name: 'Andrei', },
    {id: 2, name: 'Viktoria', },
    {id: 3, name: 'John', },
]

const messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Whats up'},
    {id: 3, message: 'Hi'},
]




export const Dialogs = (props: any) => {

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

const DialogItem = (props: any) => {
    let path = '/messages/' + props.id

    return (
        <div className={s.dialogItem}>

            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props: any) => {

    return(
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
}

