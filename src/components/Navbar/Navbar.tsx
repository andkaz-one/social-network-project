import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'


export const Navbar = () => {

    return (
        <div className={s.navbar}>
            <div><NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></div>
            <div><NavLink to={'/messages'} activeClassName={s.active}>Messages</NavLink></div>
            <div><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></div>
            <div><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></div>


        </div>
    )
}