import {ActionTypes} from "../constants/action-types";
import {AnyAction} from "redux";

export const userReducer = (state = null, {type, user}: AnyAction) => {
    switch (type) {
        case ActionTypes.USER_LOGGED_IN:
            return user
        case ActionTypes.USER_LOGGED_OUT:
            return null
        default:
            return state
    }
}