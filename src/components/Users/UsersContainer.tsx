import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress,
    UsersType,
    UserType, getUsers, follow, unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


type MapStatePropsType = {
    usersPage: UsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
//стейт usersPage: state.users
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}
export type UsersPropsType = MapStatePropsType & mapDispatchToPropsType

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers,
        setCurrentPage: setCurrentPage,
        setTotalUsersCount: setTotalUsersCount,
        toggleIsFetching: toggleIsFetching,
        toggleFollowingProgress: toggleFollowingProgress,
        getUsers: getUsers
    })//объект из mapStateToProps и объект из mapDispatchToProps склеиваются в один объект props
)(UsersContainer);

