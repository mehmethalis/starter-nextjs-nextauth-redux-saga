import {call, put, takeLatest} from "@redux-saga/core/effects";
import {ActionTypes} from "../constants/action-types";
import {signIn, getSession, signOut} from "next-auth/react";
import {UserService} from "../../services/userService";
import {userLoggedIn, userLoggedOut} from "../actions/userAction";
import {login as userLogin} from "../actions/authAction";
import Router from 'next/router'
import {LoginCredentials, RegisterCredentials} from "../../interfaces/auth.interfaces";
import {AuthService} from "../../services/authService";

const loginWithNext = async ({email, password}: LoginCredentials) => {
    return await signIn('credentials', {
        redirect: false,
        email: email,
        password: password
    })
}

function* login({credentials}: { credentials: LoginCredentials }) {
    try {
        const result: { error: object } = yield call(loginWithNext, credentials)
        if (!result.error) {
            const {accessToken} = yield call(getSession)
            const {data} = yield call(UserService.get, accessToken)
            yield put(userLoggedIn(data))
            Router.push('/profile')
        }

    } catch (error) {
        console.log(error)
    }
}

function* register({credentials}: { credentials: RegisterCredentials }) {
    try {
        const result: { error: object } = yield call(AuthService.register, credentials)
        if (!result.error) {
            yield put(userLogin(credentials))
        }

    } catch (error) {
        console.log(error)
    }
}

function* logout() {
    try {
        
        yield call(signOut)
        yield put(userLoggedOut())
    } catch (error) {
        console.log(error)
    }
}

function* verify({accessToken}: { accessToken: string }) {
    try {
        const {data} = yield call(UserService.get, accessToken)
        yield put(userLoggedIn(data))
    } catch (error) {
        console.log(error)
    }
}

export default function* authSaga() {
    yield takeLatest(ActionTypes.LOGIN, login)
    yield takeLatest(ActionTypes.REGISTER, register)
    yield takeLatest(ActionTypes.LOGOUT, logout)
    yield takeLatest(ActionTypes.USER_VERIFY_TOKEN, verify)

}