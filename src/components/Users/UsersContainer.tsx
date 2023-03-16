import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UsersType,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersС";

type MapStatePropsType = {
    usersPage:UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number

}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage

    }
}
//стейт usersPage: state.users

type mapDispatchToPropsType ={
    follow: (userId:number)=> void
    unfollow:(userId:number)=> void
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(pageNumber:number)=> void
    setTotalUsersCount:(totalCount:number)=> void
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
        },
        setCurrentPage: (pageNumber)=> {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount)=> {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
//колбеки


export default connect(mapStateToProps, mapDispatchToProps)(UsersC)