import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/single-user-icon-png-free--rLHSHx.png";

type ProfileInfoType = {
    profile: ProfileUserType

}

export function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            <div>
                <img
                    src="https://media.istockphoto.com/photos/tropical-white-sand-beach-with-coco-palms-picture-id1181563943?k=20&m=1181563943&s=612x612&w=0&h=r46MQMvFnvrzzTfjVmvZED5nZyTmAYwISDvkdtM2i2A="/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos?.large ? props.profile.photos.large : userPhoto}/>
                ava+description
            </div>
        </div>
    )
}