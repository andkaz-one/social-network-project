import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export const DialogItem = (props: any) => {
    let path = '/messages/' + props.id

    return (
        <div className={s.dialogItem}>

            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}