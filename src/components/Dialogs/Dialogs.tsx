import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {AuthType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


type PropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => void
    sendMessage: () => void
    isAuth: AuthType
}
export const Dialogs = (props: PropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    let newMessageBody = state.newMessageBody

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={props.sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}