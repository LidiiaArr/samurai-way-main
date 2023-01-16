import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'
import {message} from "antd";


type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props:DialogItemType) => {
    let path = "/dialog/1" + props.id
return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
)
}
