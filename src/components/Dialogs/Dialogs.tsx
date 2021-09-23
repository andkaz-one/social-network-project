import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


let dialogs = [
    {id: 1, name: 'Andrei', },
    {id: 2, name: 'Viktoria', },
    {id: 3, name: 'John', },
]



export const Dialogs = (props: any) => {

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <DialogItem id={'1'} name={'Andrei'}/>
                <DialogItem id={'2'} name={'Viktoria'}/>
                <DialogItem id={'3'} name={'John'}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={'Hello'}/>
                <MessageItem message={'Whats up'}/>
                <MessageItem message={'Hi'}/>
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

