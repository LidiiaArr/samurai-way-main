import React from "react";
import {getAuthUserData} from "./auth-reducer"; 

export type AppStateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState: AppStateType = {
    initialized: false
}
export const appReducer = (state = initialState, action: any): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//action creators

export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS, }
}//init: boolean

export const initializeApp = () => (dispatch) => {
     let promise = dispatch(getAuthUserData())
     Promise.all([promise])
        .then(()=> {
            dispatch(initializedSuccess())
        })
}