import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Friends} from "./components/Users/Friends";
import Login from "./components/Login/Login";


type AppPropsType = {}


function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">

            <HeaderContainer/>

            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/friends" render={ () => <Friends />} />
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>

            </div>
        </div>
    );
}

export default App;


//new string new computer


// <Route path="/dialogs" render={() => <DialogsContainer dialogsPage={props.state.dialogsPage}
//                                                        dispatch={props.dispatch.bind(props.state)}
// />}/>
// <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
//                                               dispatch={props.dispatch.bind(props.state)}

// type AppPropsType = {
//     state: RootStateType
//     getState:()=>RootStateType
//     dispatch: (action:ActionsTypes)=>void
// }

// const state = props.getState()
