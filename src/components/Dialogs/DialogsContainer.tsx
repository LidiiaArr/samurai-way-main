import React, {ChangeEvent, ChangeEventHandler} from "react";
import {ActionsTypes, DialogsPageType, StoreType} from "../../redux/store";
import {DialogStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),//результат withAuthRedirect закинь сюда
    withAuthRedirect //Dialogs попадает в withAuthRedirect
)(Dialogs)



