import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: null | string
}

let initialState :AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null captcha is not required

    // userId: 2,
    // email: "blablabla@bla.com",
    // login: "samurai",
    // isFetching: false,
}



export const authReducer = (state:AuthType=initialState, action:setAuthUserDataACType | getCaptchaUrlSuccessACType):AuthType=> {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                // userId: action.data.userId,
                // email: action.data.email,
                // login: action.data.login,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS :
            return {
                ...state,
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

export type getCaptchaUrlSuccessACType = {
    type: "GET_CAPTCHA_URL_SUCCESS"
    payload: {
        captchaUrl: string
    }
}
export const getCaptchaUrlSuccess = (captchaUrl): getCaptchaUrlSuccessACType=> ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        //если мы залогинены то сетаем в стейт id, email, login
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppThunkDispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                console.log('login')
                dispatch(getAuthUserData())
            } else if(response.data.resultCode === 10) {
                dispatch(getCaptchaUrl)
            } else  { let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error "
                dispatch(stopSubmit("login",{_error: message}))
            }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

//thunk creator
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}