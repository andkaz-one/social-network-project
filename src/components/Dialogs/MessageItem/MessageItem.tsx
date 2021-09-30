import s from "../Dialogs.module.css";
import React from "react";

type messagePropsType = {
    id: number
    message: string
}

export const MessageItem = (props: messagePropsType) => {

    return(
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
}