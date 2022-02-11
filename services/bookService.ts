import http from "../utils/baseApi";

const get = async () => {
    return await http
        .get(`${process.env.API_URL}/books`)
        .then((res) => res.data);
}
//required token with header
const getById = async (id: string) => {
    return await http
        .get(`${process.env.API_URL}/books/${id}`)
        .then((res) => res.data);
}
//required token with header
const add = async (values: object) => {
    return await http
        .post(`${process.env.BASE_API_URI}/books`, values)
        .then((res) => res.data);
}
//required token with header
const update = async (values: object, id: string) => {
    return await http
        .post(`${process.env.BASE_API_URI}books/${id}`, values)
        .then((res) => res.data);
}
//required token with header
const remove = async (id: string) => {
    return await http
        .delete(`${process.env.BASE_API_URI}/books/${id}`, undefined, undefined)
        .then((res) => res.data);
}

export const BookService = {
    get,
    getById,
    add,
    update,
    remove
}