import React, {useEffect} from 'react'
import s from './Header.module.css'
import axios from "axios";
import {setUserAuthDataAC} from "../../redux/authReducer";
import { NavLink } from 'react-router-dom';




export const Header = () => {
    
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {

                if (response.data.resultCode === 0) {
                    setUserAuthDataAC(response.data.data)
                }

            })
    }, [])

    /*let login = useSelector<any,any>(state => state.authorization.login)*/

    return (
        <div className={s.header}>
            <img src={'https://cdn-icons-png.flaticon.com/512/873/873236.png'}/>

            <div className={s.login}>
                <button><NavLink to={'/login'}>Login</NavLink></button>

            </div>

        </div>
    )
}


