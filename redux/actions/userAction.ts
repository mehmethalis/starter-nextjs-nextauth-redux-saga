import {ActionTypes} from "../constants/action-types";

export const userLoggedIn = (user: any) => {
    return {
        type: ActionTypes.USER_LOGGED_IN,
        user
    }
}

export const userLoggedOut = () => {
    return {
        type: ActionTypes.USER_LOGGED_OUT,
    }
}