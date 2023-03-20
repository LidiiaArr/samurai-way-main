import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow,
    UsersType,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersPropsType>{

    // constructor(props) {
    //     super(props);
    //
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    // }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged =(pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render(){
        return <>
            { this.props.isFetching ? <Preloader/>  : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          users={this.props.usersPage.users}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
            />
        </>
    }
}


type MapStatePropsType = {
    usersPage:UsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
//стейт usersPage: state.users
type mapDispatchToPropsType ={
    follow: (userId:number)=> void
    unfollow:(userId:number)=> void
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(pageNumber:number)=> void
    setTotalUsersCount:(totalCount:number)=> void
    toggleIsFetching:(isFetching: boolean)=> void
}
 export type UsersPropsType = MapStatePropsType & mapDispatchToPropsType

//     let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
//     return {
//         follow: (userId:number)=> {
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId:number)=> {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers:(users:Array<UserType>)=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber)=> {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount)=> {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean)=> {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
//колбеки


export default connect(mapStateToProps, {
    follow: follow,
    unfollow:unfollow,
    setUsers:setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setUsersTotalCount,
    toggleIsFetching: toggleIsFetching
    })(UsersContainer)
//объект из mapStateToProps и объект из mapDispatchToProps склеиваются в один объект props
//который передается компоненте UsersContainer
//объект props содержит стейт и колбеки