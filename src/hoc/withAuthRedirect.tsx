import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    //generic функция
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}



// Данный код представляет собой функцию withAuthRedirect, которая является HOC (Higher-Order Component) -
// компонентом высшего порядка. Она принимает компонент Component в качестве аргумента и
// возвращает новый компонент RedirectComponent, который оборачивает исходный компонент.
// ХОКИ НУЖНЫ ЧТОБЫ ИЗБАВИТЬСЯ ОТ ДУБЛИРОВАНИЯ КОДА
// Функция withAuthRedirect используется для ограничения доступа к определенным компонентам на основе значения isAuth из состояния Redux.
// Если isAuth равно false, то компонент RedirectComponent перенаправляет пользователя на страницу входа (/login).
// В противном случае, компонент Component отображается с переданными ему остальными свойствами (restProps).
// Тип MapStateToPropsType определяет структуру объекта, который будет возвращаться функцией mapStateToProps.
// В данном случае, он содержит только одно свойство isAuth типа boolean.
// Функция mapStateToProps используется для получения значения isAuth из состояния Redux (state.auth.isAuth) и возвращения объекта с этим значением.
// Наконец, функция connect(mapStateToProps) используется для связывания компонента RedirectComponent с Redux Store и передачи ему значения isAuth в качестве свойства.