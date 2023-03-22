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
import {ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfilePropsType = {
    setUserProfile: (profile: ProfileUserType) => void
    profile: ProfileUserType
}

type PathParamsType = {
    userId: string
}
type AllProfilePropsType = ProfilePropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<AllProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        // let userId= "16"
        console.log(this.props)
        if (!userId) {
            userId = "2";
        }
        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let withUrlDataComponent = withRouter(ProfileContainer)
//Закидываем данные из url
export default connect(mapStateToProps, {setUserProfile})(withUrlDataComponent)