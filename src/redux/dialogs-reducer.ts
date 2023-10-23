

type sendMessageCreatorType ={
    type:'SEND_MESSAGE',
    newMessageBody: string
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

export const sendMessageCreator =(newMessageBody:string):sendMessageCreatorType => {
    return {
        type:'SEND_MESSAGE',
        newMessageBody
    }
}



export const dialogsReducer = (state:DialogStateType= initialState , action:sendMessageCreatorType):DialogStateType=>{
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:6, message: body}]
            }
        default:
            return state;
    }
}