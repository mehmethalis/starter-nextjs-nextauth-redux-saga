import axios, {AxiosRequestHeaders} from "axios";

const _http = axios;

class BaseApi {
    _getHttpClient = () => {
        return _http;
    };

    get = (url: string, params?: object | null, headers?: AxiosRequestHeaders | undefined) => {
        return _http.get(url, {params, headers});
    };

    post = (url: string, body: object | null, headers?: AxiosRequestHeaders | undefined) => {
        return _http.post(url, body, {headers});
    };

    put = (url: string, body: object | null, headers: AxiosRequestHeaders | undefined) => {
        return _http.put(url, body, {headers});
    };

    patch = (url: string, body: object | null, headers: AxiosRequestHeaders | undefined) => {
        return _http.patch(url, body, {headers});
    };

    delete = (url: string, params: object | undefined, headers: AxiosRequestHeaders | undefined) => {
        return _http.delete(url, {params, headers});
    };
}

const http = new BaseApi();
export default http;