import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_Post = "ADD-Post"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export type AddPostActionType = {
    type: "ADD-Post" //тип конкретная строка
    postMessage: string
}

export type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT" //тип конкретная строка
    newText: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ContactsProfileType = {
    facebook: string | null
    website: string | null

    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PhotosProfileType = {
    small: string
    large: string
}
export type ProfileUserType = {
    aboutMe: string
    contacts: ContactsProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosProfileType
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileUserType | null
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const addPostActionCreator = (postMessage: string): AddPostActionType => {
    return {
        type: ADD_Post,
        postMessage: postMessage
        //store.state.profilePage.newPostText
    }
}


type setUserProfileACType = {
    type: "SET_USER_PROFILE"
    profile: ProfileUserType
}
export const setUserProfile = (profile: ProfileUserType): setUserProfileACType => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export const deletePost = (postId) => {
    return {
        type: "DELETE_POST" as const,
        postId: postId
    }
}
type deletePostACType = {
    type: "DELETE_POST",
    postId: number
}

export const profileReducer = (state: ProfilePageType = initialState, action: AddPostActionType | ChangeNewTextActionType | setUserProfileACType | setStatusAT | deletePostACType): ProfilePageType => {
    switch (action.type) {
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case "DELETE_POST": {
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId)
            }
        }
        default:
            return state;
    }
    //return state;
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}


export type setStatusAT = {
    type: "SET_STATUS"
    status: string
}
export const setStatus = (status: string): setStatusAT => ({type: SET_STATUS, status})
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


