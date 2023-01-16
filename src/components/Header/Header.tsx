import React from 'react';
import s from './Header.module.css'

type HeaderType = {

}

export function Header (props: HeaderType) {
    return (
        <header className={s.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
        </header>
    )
}