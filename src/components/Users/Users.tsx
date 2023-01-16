import React from "react";
//import styles from './users.module.css'
import {UsersType, UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import {inspect} from "util";
import styles from './user.module.css'



let Users = (props: UsersPropsType) => {

    if(props.usersPage.users.length === 0) {
    props.setUsers([
        {id: 1, followed: false, fullName: "Dmitry", status:"I am boss", location: {city:"Minsk", country:"Belarus"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
        {id: 2, followed: true, fullName: "Sasha", status:"I am boss too", location: {city:"Moscow", country:"Russia"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
        {id: 3, followed: false, fullName: "Andrew", status:"I am boss too", location: {city:"Kiev", country:"Ukraine"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
    ])
    }
    return <div>
        {
            props.usersPage.users.map(u=> <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ?  <button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button> }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>

                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
//span строчный занимает места по содержимому
//div чтобы один под другим выстроился
export default Users;