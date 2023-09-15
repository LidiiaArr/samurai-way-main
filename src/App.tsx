import React, {ReactElement} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Friends} from "./components/Users/Friends";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./redux/auth-reducer";
import {compose} from "redux";


type AppPropsType = {
    getAuthUserData: () => void
}


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <div className="app-wrapper">

                <HeaderContainer/>

                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/friends" render={() => <Friends/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}



export default compose<React.ComponentType>(
    withRouter,
    connect(null, {getAuthUserData}))(App)


//<ReactElement>