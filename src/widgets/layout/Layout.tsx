import * as S from "./styles/layoutStyle.ts";
import "./styles/reset.css";
import {Outlet, useLocation} from "react-router";
import Navigation from "../navigation/Navigation.tsx";
import GoWalkAxios from "@/axios/GoWalkAxios.ts";
import {useAtom} from "jotai";
import {userAtom} from "@/atoms/atoms.ts";
import {Suspense, useEffect} from "react";
import Loading from "@/widgets/loading/Loading.tsx";
import {Cookies} from "react-cookie";

// Navigation 보여주지 않는 페이지 목록
const independent_pages = [
    "/walk",
    "/walk/finish",
    "/signin",
    "/member_emailaddress",
    "/member_certification",
    "/member_name",
    "/member_petname",
    "/member_petsort",
    "/member_petage",
    "/member_petweight",
    "/member_gender"
]

const Layout = () => {
    const [user, setUser] = useAtom(userAtom);
    const location = useLocation();
    const pathname = location.pathname;
    const cookies = new Cookies();
    const isLoggedIn = Boolean(cookies.get("accessToken"));

    const showNavigation = !(independent_pages.includes(pathname));

    useEffect(() => {
        if(isLoggedIn){
            GoWalkAxios.get('/api/members/me').then(res => {
                setUser(res.data.data);
            });
        }
    }, [])

    if (isLoggedIn && !user) return (
        <S.Wrapper>
            <S.Container $showNavigation={showNavigation}>
                <Loading />
                {showNavigation && <Navigation />}
            </S.Container>
        </S.Wrapper>
    );

    return <S.Wrapper>
        <S.Container $showNavigation={showNavigation}>
            <Suspense fallback={<Loading />}>
                <S.Content>
                    <Outlet />
                </S.Content>
            </Suspense>
            {showNavigation && <Navigation />}
        </S.Container>
    </S.Wrapper>
}

export default Layout;