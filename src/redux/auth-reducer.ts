import {ChangeNewTextActionType, PostType, ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
const SET_USER_DATA = "SET_USER_DATA"




export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState :AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

    // userId: 2,
    // email: "blablabla@bla.com",
    // login: "samurai",
    // isFetching: false,
}


//Экшонкриэйторы

export const authReducer = (state:AuthType=initialState, action:setAuthUserDataACType):AuthType=> {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                // userId: action.data.userId,
                // email: action.data.email,
                // login: action.data.login,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
    return state;
}
//редьюсеры чистые функции которые принимают часть стейта

export type setAuthUserDataACType = {
    type: "SET_USER_DATA",
    data: {
        userId: number
        email: string
        login: string
    }
}
export const setAuthUserData = (userId: number, email: string, login: string):setAuthUserDataACType => ({type: SET_USER_DATA, data: {userId, email, login}})
// export const setAuthUserData = (data) => ({type: SET_USER_DATA, data: data})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                //если мы залогинены то сетаем в стейт id, email, login
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}