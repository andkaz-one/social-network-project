import React from 'react'
import {UsersPagePropsType} from "./UsersContainer";
import s from './Users.module.css'


export const Users = (props: UsersPagePropsType) => {

    if (props.users.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    imageAddress: 'https://cdn-icons-png.flaticon.com/128/1384/1384005.png',
                    name: 'Andrei',
                    status: "Hello i'm new user",
                    followed: true,
                    location: {country: 'Poland', city: 'Warsaw'}
                },
                {
                    id: 2,
                    imageAddress: 'https://cdn-icons-png.flaticon.com/128/733/733641.png',
                    name: 'Viktoria',
                    status: "Hello i'm new user",
                    followed: false,
                    location: {country: 'Poland', city: 'Warsaw'}
                }
            ]
        )
    }

    return (
        <div>
            {props.users.users.map(user => {
                return (
                    <div key={user.id} className={s.wrapper}>
                        <div className={s.logo}>
                            <img src={user.imageAddress}/>
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
                                <p>{user.location.city}</p>
                                <span>{user.location.country}</span>
                            </div>


                        </div>
                    </div>

                )
            })}
        </div>
    )
}




