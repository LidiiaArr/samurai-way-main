import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import { HashRouter, Redirect, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


//делаем лэйзи загрузку
const DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(()=> import("./components/Users/UsersContainer"))

type AppPropsType = {
    initializeApp: () => void
}& ReturnType<typeof mapStateToProps>

class App extends React.Component<AppPropsType> {
    //срабатывает один раз когда компонента вмонтируется
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/" render={() => <Redirect to="/profile" />} />
                    <Route
                        path="/dialogs"
                        render={() => (
                            <Suspense fallback={<Preloader />}>
                                <DialogsContainer />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="/profile/:userId?"
                        render={()=> (
                            <Suspense fallback={<Preloader />}>
                            <ProfileContainer/>
                            </Suspense>
                        )} />
                    <Route
                        path="/users"
                        render={()=> (
                            <Suspense fallback={<Preloader />}>
                                <UsersContainer/>
                            </Suspense>
                        )} />
                    <Route path="/login" render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const SamuraiJSApp = () => {
     return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

//HashRouter чтобы роуты работали на гитхаб пэйджес