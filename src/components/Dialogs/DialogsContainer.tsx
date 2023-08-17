import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType, StoreType} from "../../redux/store";
import {DialogStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthType} from "../../redux/auth-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStateType): { dialogsPage: DialogsPageType, isAuth: AuthType } => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

//mapStateToProps
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);



export default DialogsContainer



