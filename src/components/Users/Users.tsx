import React from "react";
import styles from "./user.module.css";
import userPhoto from "../../assets/images/single-user-icon-png-free--rLHSHx.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsTypePresentComp = {
    totalUsersCount : number
    currentPage: number
    pageSize: number
    users: Array<UserType>
    follow: (userId:number)=> void
    unfollow:(userId:number)=> void
    onPageChanged: (pageNumber: number)=> void
}
const Users = (props: UsersPropsTypePresentComp) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages:Array<number> = [ ];
    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    return <div>
        <div>
            {/*{pages.map(p=> {return <span className={this.props.currentPage === p && styles.selectedPage}>{p}</span>})}*/}
            {pages.map(p=> {return <span className={ props.currentPage === p ? styles.selectedPage : styles.Page }
                                         onClick={ (e)=>{props.onPageChanged(p)}} >{p}</span>})}
        </div>
        {/*{props.usersPage.users.map(u => <div key={u.id}>*/}
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u?.photos?.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "9a08c01f-a212-42b6-bf00-f90c2da32f6e"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })

                            }}>UnFollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "9a08c01f-a212-42b6-bf00-f90c2da32f6e"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>

                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};
//span строчный занимает места по содержимому
//div чтобы один под другим выстроился

export default Users;