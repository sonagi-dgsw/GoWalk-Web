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
        if(accessToken) {
            request.headers.Authorization = `Bearer ${accessToken}`;
        }
        return request;
    }
)

GoWalkAxios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error) => {
        if(error.status != 403) return error;
        const originalRequest = error.config;
        if (!originalRequest._retry) {
            const refreshRes = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/refresh`, null, {withCredentials: true})
            const newAccessToken = refreshRes.data.data?.accessToken;
            if(newAccessToken) {
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                originalRequest._retry = true;
                return GoWalkAxios(originalRequest);
            }
        }
        cookies.remove("accessToken");
        cookies.remove("refreshToken");
        alert("다시 로그인해 주세요.")
        window.location.href = "/signin";
    }
);

export default GoWalkAxios;