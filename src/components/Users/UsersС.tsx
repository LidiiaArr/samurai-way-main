import React, {ReactNode} from "react";
//import styles from './users.module.css'
import {UsersType, UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import {inspect} from "util";
import styles from './user.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/single-user-icon-png-free--rLHSHx.png'
import {AppStateType} from "../../redux/redux-store";

class UsersC extends React.Component<UsersPropsType>{

    constructor(props) {
        super(props);

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    //  getUsers = () => {
    //     if (this.props.usersPage.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }

    render(){
       return <div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>

                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

//span строчный занимает места по содержимому
//div чтобы один под другим выстроился

export default UsersC;