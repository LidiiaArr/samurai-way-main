import {ChangeNewTextActionType, PostType, ProfilePageType} from "./store";
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

export const authReducer = (state:AuthType=initialState, action:any):AuthType=> {

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

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
// export const setAuthUserData = (data) => ({type: SET_USER_DATA, data: data})