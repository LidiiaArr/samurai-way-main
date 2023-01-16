import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
// import {addPost, ProfilePageType, updateNewPostText} from "../../redux/state";
import MyPostContainer from "./MyPosts/MyPostContainer";

type ProfilePropsType ={

}

export function Profile(props:ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}

// type ProfilePropsType ={
//     profilePage: ProfilePageType
//     dispatch: (action:ActionsTypes)=>void
// }

// <MyPostsContainer posts={props.profilePage.posts}
//                   newPostText={props.profilePage.newPostText}
//                   dispatch={props.dispatch}
// />