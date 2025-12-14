import GoWalkAxios from "@/axios/GoWalkAxios.ts";

export const fetchUser = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if(!accessToken || accessToken.trim() == "") {
        alert("로그인 후 이용해 주세요.")
        window.location.href = "/signin";
    }
    const res = await GoWalkAxios.get('/api/members/me')
    if (res.status == 200) {
        return res.data.data;
    }
}