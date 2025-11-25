import GoWalkAxios from "@/axios/GoWalkAxios.ts";
import {Cookies} from "react-cookie";

export const fetchUser = async () => {
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");
    if(!accessToken || accessToken.trim() == "") {
        alert("로그인 후 이용해 주세요.")
        window.location.href = "/signin";
    }
    const res = await GoWalkAxios.get('/api/members/me')
    if (res.status == 200) {
        return res.data.data;
    }
}