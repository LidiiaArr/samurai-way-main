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


// type PropsType = {
// }

// export const DialogsContainer = (props: PropsType) => {
//
//     return <StoreContext.Consumer>
//         {
//         (store)=> {
//             let state = store.getState().dialogsPage
//
//             let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
//                 let body = e.currentTarget.value
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//
//             return <Dialogs dialogsPage={state}
//                      updateNewMessageBody={onNewMessageChange}
//                      sendMessage={onSendMessageClick}/>
//         }
//     }
//     </StoreContext.Consumer>
// }
type MapStatePropsType = {
    dialogsPage: DialogStateType
}
//let mapStateToProps = (state:AppStateType):{dialogsPage:DialogsPageType} => {
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
//mapStateToProps
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// type PropsType = {
//     dialogsPage: DialogsPageType
//     dispatch: (action: ActionsTypes) => void
// }

export default DialogsContainer



