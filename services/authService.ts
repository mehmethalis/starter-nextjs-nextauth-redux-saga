import http from "../utils/baseApi";
import {LoginCredentials, RegisterCredentials} from "../interfaces/auth.interfaces";

const login = async (credentials: LoginCredentials) => {
    return await http
        .post(`${process.env.BASE_API_URI}/auth/login`, credentials)
        .then((res) => res.data);
};

const register = async (credentials: RegisterCredentials) => {
    return await http
        .post(`${process.env.BASE_API_URI}/auth/register`, credentials)
        .then((res) => res.data);
}

export const AuthService = {
    login,
    register
}