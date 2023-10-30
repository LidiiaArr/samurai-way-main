import React, {useRef, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/single-user-icon-png-free--rLHSHx.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export function ProfileInfo(props: ProfileInfoType) {
const [editMode, setEditMode] = useState(false)

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
                {editMode
                    ? <ProfileDataForm
                        profile={props.profile}
                        isOwner={props.isOwner}
                        setEditMode={setEditMode}
                    />
                    : <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        onMainPhotoSelected={onMainPhotoSelected}
                        setEditMode={setEditMode}
                    />
                }
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner,onMainPhotoSelected, setEditMode}) => {
    return (
        <>
            <div className={s.input}>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>

            <div className={s.button}>
                {isOwner && <div><button onClick={()=> setEditMode(true)}>edit</button></div>}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b>About me</b>: {profile.lookingForAJob ? "yes" : "I am a cool person"}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile[key]}/>
            })}
            </div>
        </>
    )
}

export const ProfileDataForm = ({profile, isOwner, setEditMode}) => {
    return(
        <div >
            <div className={s.button}>
                {isOwner && <div><button onClick={()=>{setEditMode(false)}}>cancel</button></div>}
            </div>

        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
