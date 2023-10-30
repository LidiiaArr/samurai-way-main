import React from 'react';
import { InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl?: string | null
}

// type LoginPropsType = {
//     login: (email: string, password: string, rememberMe: boolean) => void
//     isAuth: boolean
//     captchaUrl?: string
// }
export type LoginFormOwnProps = {
    captchaUrl?: string | null
}

//const LoginForm: React.FC<InjectedFormProps<FormDataType>& LoginFormOwnProps> =
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
            {
                error && <div className={styles.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
//const LoginReduxForm = reduxForm<FormDataType >  ({form: 'login'})(LoginForm)
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>   ({form: 'login'})(LoginForm)
//const Login = (props: LoginPropsType)
const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login);

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

