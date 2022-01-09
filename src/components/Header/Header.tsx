import React, {useEffect} from 'react'
import s from './Header.module.css'
import {setUserAuthDataAC} from "../../redux/authReducer";
import { NavLink } from 'react-router-dom';
import {authorizationAPI} from "../../dal/authorizationAPI";




export const Header = () => {

    useEffect(() => {
        authorizationAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    setUserAuthDataAC(response.data.data)
                }
            })
    }, [authorizationAPI])

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



