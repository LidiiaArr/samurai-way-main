import {AddPostActionType, ChangeNewTextActionType, PostType, ProfilePageType} from "./store";

const ADD_Post = "ADD-Post"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ],
    newPostText: ''
}

export const addPostActionCreator = (postMessage:string):AddPostActionType=> {
    return {
        type:ADD_Post,
        postMessage: postMessage
        //store.state.profilePage.newPostText
    }
}

export const updateNewPostTextActionCreator = (newText1:string): ChangeNewTextActionType=> {
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText: newText1
    }
}

export const profileReducer = (state:ProfilePageType = initialState, action:AddPostActionType | ChangeNewTextActionType)=>{
    switch (action.type){
        case ADD_Post: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage, //в пути самурая this.state.profilePage.newPostText
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return{
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state;

    }

    return state;

}