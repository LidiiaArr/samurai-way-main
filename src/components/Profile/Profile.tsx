import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {ProfileUserType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileUserType

}

export function Profile(props:ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
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

