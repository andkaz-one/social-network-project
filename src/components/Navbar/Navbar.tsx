import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import {sidebarType} from "../../redux/State";

type propsType = {
    friendsLogo: Array<sidebarType>
}


export const Navbar = ({friendsLogo, ...props}: propsType) => {

    const friendsListElement = friendsLogo.map(m => <img src={m.value}/>)



    return (
        <div className={s.navbar}>
            <div><NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></div>
            <div><NavLink to={'/messages'} activeClassName={s.active}>Messages</NavLink></div>
            <div><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></div>
            <div><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></div>

            <div className={s.friendsLogo}>
                {friendsListElement}
            </div>


        </div>
    )
}