import React from 'react'
import {UsersPagePropsType} from "./UsersContainer";


export const Users = (props: UsersPagePropsType) => {

    return(
        <div>

            {props.users.users.map(u => <div key={u.id}>
                <div>{u.name}
                <span>{u.followed ? <button onClick={() => props.unFollowHandler(u.id)}>Unfollow</button>
                    : <button onClick={()=>props.followHandler(u.id)}>Follow</button>}</span></div>
                <div>{u.status}</div></div>)}
        </div>
    )
}