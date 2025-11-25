import axios, { AxiosResponse} from 'axios';
import {Cookies} from 'react-cookie';

const cookies = new Cookies();

const GoWalkAxios = axios.create({
    // 기본 설정
});

GoWalkAxios.defaults.withCredentials = true;

GoWalkAxios.interceptors.request.use(
    (request) => {
        const accessToken = cookies.get("accessToken")
        request.baseURL = import.meta.env.VITE_SERVER_URL;
        request.headers.Authorization = `Bearer ${accessToken}`;
        return request;
    }
)

GoWalkAxios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.status == 403 && !originalRequest._retry) {
            const refreshToken = cookies.get("refreshToken")
            originalRequest._retry = true;
            originalRequest.data = {
                username: "gorani",
                refreshToken: refreshToken
            }
            return GoWalkAxios(originalRequest);
        } else if (error.status == 403) {
            alert("다시 로그인해 주세요.")
            window.location.href = "/signin";
        }
        return error;
    }
);

export default GoWalkAxios;