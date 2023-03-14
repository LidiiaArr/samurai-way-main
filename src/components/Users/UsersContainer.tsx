import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersType, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersС";

type MapStatePropsType = {
    usersPage:UsersType
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
//стейт usersPage: state.users

type mapDispatchToPropsType ={
    follow: (userId:number)=> void
    unfollow:(userId:number)=> void
    setUsers:(users:Array<UserType>)=>void
}
export type UsersPropsType = MapStatePropsType & mapDispatchToPropsType


    let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userId:number)=> {
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
        }
    }
}
//колбеки


export default connect(mapStateToProps, mapDispatchToProps)(UsersC)