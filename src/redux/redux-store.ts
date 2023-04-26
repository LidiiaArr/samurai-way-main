import React from 'react';
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./store";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer,
    });
//нужно передать этой функции скомбаненные 3 редьюсера
//Вызываем функцию combineReducers и передаем объект
//Полная запись которого {profileReducer:profileReducer,dialogsReducer:dialogsReducer,sidebarReducer:sidebarReducer}
//Свойство-sidebar:sidebarReducer-Значение

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
//Функция создания стора
//window.store = store;

export default store;

//console.log(store.getState())


