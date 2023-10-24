import React from "react";
import styles from "./user.module.css";
import userPhoto from "../../assets/images/single-user-icon-png-free--rLHSHx.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


type UsersPropsTypePresentComp = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}
const Users = (props: UsersPropsTypePresentComp) => {

    return <div>
        <Paginator totalUsersCount={props.totalUsersCount} currentPage={props.currentPage} pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged} portionSize={10}/>
        <div>
            {props.users.map(u => <User
                    user={u}
                    key={u.id}
                    follow={props.follow}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                />
            )
            }
        </div>
    </div>
};
//span строчный занимает места по содержимому
//div чтобы один под другим выстроился

export default Users;