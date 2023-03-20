import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
// import {addPost, ProfilePageType, updateNewPostText} from "../../redux/state";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {UsersPropsType} from "../Users/UsersContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfilePropsType = any

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    //метод жизненного цикла которые есть у объекта созданного с помощью этого класса
    // вызывается после рендеринга компонента
    //забирание данных долгий асинхронный процесс
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

// type ProfilePropsType ={
//     profilePage: ProfilePageType
//     dispatch: (action:ActionsTypes)=>void
// }

// <MyPostsContainer posts={props.profilePage.posts}
//                   newPostText={props.profilePage.newPostText}
//                   dispatch={props.dispatch}
// />


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)