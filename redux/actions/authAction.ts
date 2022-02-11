import {ActionTypes} from "../constants/action-types";
import {LoginCredentials, RegisterCredentials} from "../../interfaces/auth.interfaces";

export const login = (credentials: LoginCredentials) => {
    return {
        type: ActionTypes.LOGIN,
        credentials
    }
}
export const register = (credentials: RegisterCredentials) => {
    return {
        type: ActionTypes.REGISTER,
        credentials
    }
}

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT,
    }
}
export const verify = (accessToken: string) => {
    return {
        type: ActionTypes.USER_VERIFY_TOKEN,
        accessToken
    }
}