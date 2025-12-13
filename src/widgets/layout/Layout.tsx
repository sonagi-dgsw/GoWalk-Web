import * as S from "./styles/layoutStyle.ts";
import "./styles/reset.css";
import {Outlet, useLocation} from "react-router";
import Navigation from "../navigation/Navigation.tsx";
import GoWalkAxios from "@/axios/GoWalkAxios.ts";
import {useAtom} from "jotai";
import {userAtom} from "@/atoms/atoms.ts";
import {Suspense, useEffect, useState} from "react";
import Loading from "@/widgets/loading/Loading.tsx";
import {Cookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {fetchUser} from "@/axios/fetchUser.ts";

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

const public_url = [
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
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const pathname = location.pathname;

    const showNavigation = !(independent_pages.includes(pathname));

    useEffect(() => {
        setTimeout(() => {{
            setIsLoading(false);
        }}, 2000);
        if(!user && !public_url.includes(pathname)) {
            console.log("wtf")
            // @ts-ignore
            setUser(fetchUser());
        }
    }, [])

    return <S.Wrapper>
        <S.Container $showNavigation={showNavigation}>
            {isLoading && (
                <Loading />
            )}
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