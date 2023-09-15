import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {AuthType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


type PropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => void
    sendMessage: (newMessageBody:string) => void
    isAuth: AuthType
}
export const Dialogs = (props: PropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    let newMessageBody = state.newMessageBody



    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    //if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       placeholder='Enter your message'
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send22</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)