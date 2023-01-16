
export type updateNewMessageBodyCreatorType = {
    type:'UPDATE-NEW-MESSAGE-BODY'
    body:string
}
type sendMessageCreatorType ={
    type:'SEND_MESSAGE'
}
type MessageType = {
    id: number,
    message: string
}
type DialogsType = {
    id: number,
    name: string
}

type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogsType>
    newMessageBody: string
}
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type DialogStateType = typeof initialState

let initialState = {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
        ] as Array<MessageType>,
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ] as Array<DialogsType>,
        newMessageBody: ""
    }

export const sendMessageCreator =():sendMessageCreatorType => {
    return {
        type:'SEND_MESSAGE'
    }
}

export const updateNewMessageBodyCreator =(body:string): updateNewMessageBodyCreatorType => {
    return {
        type:'UPDATE-NEW-MESSAGE-BODY',
        body:body
        //newMessageBody:body
    }
}

export const dialogsReducer = (state:DialogStateType= initialState , action:sendMessageCreatorType|updateNewMessageBodyCreatorType):DialogStateType=>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages: [...state.messages, {id:6, message: body}]
            }

        default:
            return state;

    }
}