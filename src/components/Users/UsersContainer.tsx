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
import axios from "axios";

class UsersContainer extends React.Component<UsersPropsType>{

    // constructor(props) {
    //     super(props);
    //
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
                console.log(response.data.totalCount)
            })
    }

    onPageChanged =(pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render(){
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.usersPage.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}


type MapStatePropsType = {
    usersPage:UsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)