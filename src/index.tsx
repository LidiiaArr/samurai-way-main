import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import  {RootStateType} from "./redux/store";
import store from './redux/redux-store'
import {Provider} from "react-redux";


export const rerenderEntireTree = ()=>{

    ReactDOM.render(
        <BrowserRouter>

            <Provider store={store}>

            {/*Хотим чтобы все наши дочерние компоненты имели доступ к стору напрямую*/}
                <App />
                {/*<App state={store.getState()}*/}
                {/*     getState={store.getState.bind(store)}*/}
                {/*     dispatch={store.dispatch.bind(store)}*/}
                {/*/>*/}

            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
//rerenderEntireTree(); //для отрисовки в первый раз

//store.subscribe(rerenderEntireTree) //для последующих отрисовок, отрисуй все


//Когла стейт измениться стор вызовет стрелочную функцию затем rerenderEntireTree
//в пути самурая было rerenderEntireTree(state) но вебшторм ругался

//import state, {addPost, RootStateType, subscribe, updateNewPostText} from './redux/state'- ругался вебшторм

//store.subscribe(()=>{
//     let state = store.getState();
//     rerenderEntireTree();
// }) путь самурая 47