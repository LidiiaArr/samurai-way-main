import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

type ProfilePropsType = any

export function Profile(props:ProfilePropsType) {
   // console.log(props.profile)

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

