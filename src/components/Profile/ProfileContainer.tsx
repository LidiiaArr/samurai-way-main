import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {AuthType} from "../../redux/auth-reducer";

type ProfilePropsType = {
    // setUserProfile: (profile: ProfileUserType) => void
    profile: ProfileUserType
    getUserProfile: (userId: number) => void
    isAuth: AuthType
}

type PathParamsType = {
    userId: string
}
type AllProfilePropsType = ProfilePropsType & RouteComponentProps<PathParamsType>

////Внимание если нужен props.isAuth то используй props.isAuth.isAuth
class ProfileContainer extends React.Component<AllProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(+userId)
    }

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

let AuthRedirectComponent = (props) => {

    // @ts-ignore
    if(!this.props.isAuth.isAuth) return <Redirect to={'/login'} />

    // если пользователь не залоген редиректни его на логин
    return <ProfileContainer {...props}/>
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth
})

let withUrlDataComponent = withRouter(ProfileContainer)
//Закидываем данные из url
export default connect(mapStateToProps, {getUserProfile})(withUrlDataComponent)