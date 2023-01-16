
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StoreType = {
    state: RootStateType
    getState: () => RootStateType
    callSubscriber: () => void
    addPost: (postMessage: string) => void
    subscribe: (observer: () => void) => void
    dispatch:(action:ActionsTypes) => void
}


let store = {
    state: {
        profilePage: { //свойство объекта
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Blabla", likesCount: 11},
                {id: 4, message: "Dada", likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },


    getState() { // метод объекта геттер
        return this.state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer //паттерн наблюдатель observer button.addEventListener
    },


    dispatch(action){
//диспатчим экшены из UI и эти действия преобразуют стейт
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
        this.state.sidebar = sidebarReducer(this.state.sidebar, action)
//Редьюсеры - функции принимают часть стейта нужную редьюсеру и экшен
//Преобразают часть стейта и выплевывают его
//Переприсваиваем заново

        this._callSubscriber();
 //Уведомляем подписчиков
    }
}

const ADD_Post = "ADD-Post"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'





export type AddPostActionType = {
    type:"ADD-Post" //тип конкретная строка
    postMessage: string
}

export type ChangeNewTextActionType = {
    type:"UPDATE-NEW-POST-TEXT" //тип конкретная строка
    newText: string
}

export type updateNewMessageBodyCreatorType = {
    type:'UPDATE-NEW-MESSAGE-BODY'
    body:string
}

export type sendMessageCreatorType ={
    type:'SEND_MESSAGE'
}
export type ActionsTypes = AddPostActionType |ChangeNewTextActionType | updateNewMessageBodyCreatorType | sendMessageCreatorType

type MessageType = {
    id: number,
    message: string
}

type DialogsType = {
    id: number,
    name: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogsType>
    newMessageBody: string
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

// addPost(postMessage: string) { //метод сеттер
//     const newPost: PostType = {
//         id: new Date().getTime(),
//         message: postMessage,
//         likesCount: 0
//     }
//     this.state.profilePage.posts.push(newPost);
//     this.state.profilePage.newPostText = ""
//     this._callSubscriber();
// },

//     updateNewPostText(newText: string) {
//         this.state.profilePage.newPostText = newText
//         this._callSubscriber();
// //Перерисовываем все дерево c помощью функции
//     }




export default store;
