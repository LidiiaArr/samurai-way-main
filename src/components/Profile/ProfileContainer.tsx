import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType, getStatus, updateStatus, savePhoto} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

type ProfilePropsType = {
    // setUserProfile: (profile: ProfileUserType) => void
    profile: ProfileUserType
    getUserProfile: (userId: number) => void
    isAuth: AuthType
    getStatus: (userId: number) => void
    status: string
    updateStatus: (status: string) => void
    authorizedUserId: number | null
}

type PathParamsType = {
    userId: string | undefined
}
type AllProfilePropsType = ProfilePropsType & RouteComponentProps<PathParamsType> & MapDispatchToPropsType
//type AllProfilePropsType = any
class ProfileContainer extends React.Component<AllProfilePropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            // @ts-ignore
            userId = this.props.authorizedUserId;
            //userId = "30181"
            //my id
            if (!userId){
                this.props.history.push('/login')
            }
        }
        // @ts-ignore
        this.props.getUserProfile(+userId)
        // @ts-ignore
        this.props.getStatus(+userId)
    }
    componentDidMount() {
        this.refreshProfile();
    }

    //срабатывает при изменениях в пропсах
    componentDidUpdate(prevProps: Readonly<AllProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!Boolean(this.props.match.params.userId)}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
    //status: state.status
})

type MapDispatchToPropsType ={
    getUserProfile: (id: string) => void
    getStatus: (id: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);