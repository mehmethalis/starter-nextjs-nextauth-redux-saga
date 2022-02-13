import {ActionTypes} from "../constants/action-types";
import {AnyAction} from "redux";

const userInitialState = {
    isLogin: false,
    user: null
}
export const userReducer = (state = userInitialState, {type, user}: AnyAction) => {
    switch (type) {
        case ActionTypes.USER_LOGGED_IN:
            return {...state, user, isLogin: true}
        case ActionTypes.USER_LOGGED_OUT:
            return null
        default:
            return state
    }
}