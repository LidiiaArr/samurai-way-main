import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";
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
                ...action.payload,
            }
        default:
            return state;
    }
    return state;
}
//редьюсеры чистые функции которые принимают часть стейта

export type setAuthUserDataACType = {
    type: "SET_USER_DATA",
    payload: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string| null, isAuth: boolean):setAuthUserDataACType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
// export const setAuthUserData = (data) => ({type: SET_USER_DATA, data: data})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                //если мы залогинены то сетаем в стейт id, email, login
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: AppThunkDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                console.log('login')
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error "
                dispatch(stopSubmit("login",{_error: message}))
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}