import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {SamuraiJSApp} from './App';




export const rerenderEntireTree = ()=>{

    ReactDOM.render(
        <SamuraiJSApp />,

        document.getElementById('root')
    );
}
rerenderEntireTree();
//rerenderEntireTree(); //для отрисовки в первый раз

//store.subscribe(rerenderEntireTree) //для последующих отрисовок, отрисуй все


//Когла стейт измениться стор вызовет стрелочную функцию затем rerenderEntireTree
//в пути самурая было rerenderEntireTree(state) но вебшторм ругался

//import state, {addPost, RootStateType, subscribe, updateNewPostText} from './redux/state'- ругался вебшторм

