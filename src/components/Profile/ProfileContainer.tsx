import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType, setUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfilePropsType = {
    // setUserProfile: (profile: ProfileUserType) => void
    profile: ProfileUserType
    getUserProfile: (userId: number) => void
    isAuth: AuthType
    getStatus: (userId: number) => void
    status: string
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}
type AllProfilePropsType = ProfilePropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<AllProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "27901";
        }
        this.props.getUserProfile(+userId)
        this.props.getStatus(+userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth,
    status: state.profilePage.status,
    //status: state.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);