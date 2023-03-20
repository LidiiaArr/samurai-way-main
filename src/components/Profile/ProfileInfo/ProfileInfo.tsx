import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = any

export function ProfileInfo(props: ProfileInfoType) {
    // console.log(props.profile)

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
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}