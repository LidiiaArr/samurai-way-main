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

        let pagesCount =Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages:Array<number> = [];
        for(let i=1; i <= pagesCount; i++){
            pages.push(i)
        }

       return <div>
           <div>
               {/*{pages.map(p=> {return <span className={this.props.currentPage === p && styles.selectedPage}>{p}</span>})}*/}
               {pages.map(p=> {return <span className={this.props.currentPage === p?styles.selectedPage:styles.Page}
                                            onClick={ (e)=>{this.onPageChanged(p)}} >{p}</span>})}
           </div>
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