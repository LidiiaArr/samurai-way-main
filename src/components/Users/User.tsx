import React from "react";
import styles from "./user.module.css";
import userPhoto from "../../assets/images/single-user-icon-png-free--rLHSHx.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsTypePresentComp = {
    // totalUsersCount: number
    // currentPage: number
    // pageSize: number
    // users: Array<UserType>
    //
    // onPageChanged: (pageNumber: number) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    key: number
}
const User = (props: UsersPropsTypePresentComp) => {
    let user = props.user
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user?.photos?.small ? user.photos.small : userPhoto} className={styles.userPhoto}
                                 alt={"user photo"}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          props.unfollow(user.id)
                                      }}
                            >UnFollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>

                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </span>
        </div>
    )
};


export default User;