import http from "../utils/baseApi";

const get = async (token: string) => {
    return await http
        .get(`${process.env.BASE_API_URI}/user/profile`, null, {Authorization: token})
        .then((res) => res.data);
}
const update = async (values: object, token: string) => {
    return await http
        .put(`${process.env.BASE_API_URI}/user/profile`, values, {Authorization: token})
        .then((res) => res.data);
}
export const UserService = {
    get,
    update
}