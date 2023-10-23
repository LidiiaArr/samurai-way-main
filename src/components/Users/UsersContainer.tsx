import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress,
    UsersType,
    UserType, requestUsers, follow, unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
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
    // return {
    //     usersPage: state.usersPage,
    //     pageSize: state.usersPage.pageSize,
    //     totalUsersCount: state.usersPage.totalUserCount,
    //     currentPage: state.usersPage.currentPage,
    //     isFetching: state.usersPage.isFetching,
    //     followingInProgress: state.usersPage.followingInProgress
    // }
    return {
        usersPage: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers,
        setCurrentPage: setCurrentPage,
        setTotalUsersCount: setTotalUsersCount,
        toggleIsFetching: toggleIsFetching,
        toggleFollowingProgress: toggleFollowingProgress,
        getUsers: requestUsers
    })//объект из mapStateToProps и объект из mapDispatchToProps склеиваются в один объект props
)(UsersContainer);

