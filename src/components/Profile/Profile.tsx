import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {ProfileUserType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void

}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}


