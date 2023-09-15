import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {friendsReducer} from "./friends-reducer";
import  {ThunkDispatch} from "redux-thunk";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer,
    friends: friendsReducer,
    form: formReducer,
    });
//нужно передать этой функции скомбаненные 3 редьюсера
//Вызываем функцию combineReducers и передаем объект
//Полная запись которого {profileReducer:profileReducer,dialogsReducer:dialogsReducer,sidebarReducer:sidebarReducer}
//Свойство-sidebar:sidebarReducer-Значение

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//Функция создания стора
//@ts-ignore
window.store = store;

export type AppThunkDispatch = ThunkDispatch<AppStateType, void, AnyAction>


export default store;

//console.log(store.getState())


