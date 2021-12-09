import s from "./Users.module.css";
import React from "react";
import userLogo from '../../assets/img/user-logo.png'
import {InitialStateUsersType} from "../../redux/usersReducer";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPageHandler: (page: number) => void
    users: InitialStateUsersType
    unFollowHandler: (uID: number) => void
    followHandler: (uID: number) => void
}


export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page ? s.active : ''}
                                 onClick={() => props.onClickPageHandler(page)}>
                            {page}
                        </span>
                })}
            </div>
            {props.users.users.map(user => {
                return (
                    <div key={user.id} className={s.wrapper}>
                        <div className={s.logo}>
                            <img src={userLogo}/>
                            <div>{user.followed ?
                                <button onClick={() => props.unFollowHandler(user.id)}>Unfollow</button>
                                : <button onClick={() => props.followHandler(user.id)}>Follow</button>}</div>
                        </div>
                        <div className={s.container}>
                            <div className={s.content}>
                                <h2>{user.name}</h2>
                                <p>{user.status}</p>
                            </div>
                            <div>
                                <p>{'user.location.city'}</p>
                                <span>{'user.location.country'}</span>
                            </div>


                        </div>
                    </div>

                )
            })}
        </div>
    )
}