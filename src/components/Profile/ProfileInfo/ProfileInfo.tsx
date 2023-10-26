import  React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/single-user-icon-png-free--rLHSHx.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export function ProfileInfo(props: ProfileInfoType) {
    // console.log(props.profile)
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        console.log(e.currentTarget.files[0])
        if(e.currentTarget.files.length) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    return (

        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
                     alt={'profile Photo'}
                     className={s.mainPhoto}
                />
                <div className={s.input}>
                    {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

