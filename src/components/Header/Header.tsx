import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {setAuthUserDataACType} from "../../redux/auth-reducer";

// type HeaderType = {
//     setAuthUserData: (userId: number, email: string, login: string)=> setAuthUserDataACType
//     login: string | null
//     isAuth: boolean
// }
type HeaderType = any
export function Header(props: HeaderType) {
    return (
        <header className={s.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={"/login"}>Login</NavLink>
                }

            </div>
        </header>
    )
}