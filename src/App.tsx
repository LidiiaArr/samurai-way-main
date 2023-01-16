import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, RootStateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import state, {addPost, RootStateType, updateNewPostText} from "./redux/state"


type AppPropsType = {

}



function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">

            <Header/>

            <Navbar/>
            <div className="app-wrapper-content">


                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile" render={() => <Profile/>} />
                <Route path="/users" render={() => <UsersContainer/>} />


            </div>
        </div>
    );
}

export default App;


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
