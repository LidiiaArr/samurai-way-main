import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth
})

let withUrlDataComponent = withRouter(AuthRedirectComponent)
//Закидываем данные из url
export default connect(mapStateToProps, {getUserProfile})(withUrlDataComponent)