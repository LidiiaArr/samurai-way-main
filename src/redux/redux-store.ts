import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import friends from "../components/Users/Friends";
import {friendsReducer} from "./friends-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import thunkMiddleware from "redux-thunk"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer,
    friends: friendsReducer,
    });
//нужно передать этой функции скомбаненные 3 редьюсера
//Вызываем функцию combineReducers и передаем объект
//Полная запись которого {profileReducer:profileReducer,dialogsReducer:dialogsReducer,sidebarReducer:sidebarReducer}
//Свойство-sidebar:sidebarReducer-Значение

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//Функция создания стора
//window.store = store;

export type AppThunkDispatch = ThunkDispatch<AppStateType, void, AnyAction>

// export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
// export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
// //создаем протипизированный useSelector
// //за счет этой типизации нужно указывать только тот тип данных которые мы хотим принять
// //без указания типа всего стейта


export default store;

//console.log(store.getState())


