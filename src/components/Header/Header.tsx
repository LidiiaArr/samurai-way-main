import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png"
// type HeaderType = {
//     setAuthUserData: (userId: number, email: string, login: string)=> setAuthUserDataACType
//     login: string | null
//     isAuth: boolean
// }
type HeaderType = any
export function Header(props: HeaderType) {
    return (
        <header className={s.header}>
            <img src={logo} />

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}  <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}