import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/single-user-icon-png-free--rLHSHx.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void

}

export function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos?.large ? props.profile.photos.large : userPhoto} alt={'profile Photo'}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

