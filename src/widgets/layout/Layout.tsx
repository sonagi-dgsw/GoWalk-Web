import * as S from "./styles/layoutStyle.ts";
import "./styles/reset.css";
import {Outlet, useLocation} from "react-router";
import Navigation from "../navigation/Navigation.tsx";
import {useAtom} from "jotai";
import {userAtom} from "@/atoms/atoms.ts";
import {Suspense, useEffect, useState} from "react";
import Loading from "@/widgets/loading/Loading.tsx";
import {fetchUser} from "@/axios/fetchUser.ts";
import banner_left from "@assets/banner_left.png";
import banner_right from "@assets/banner_right.png";

// Navigation 보여주지 않는 페이지 목록
const independent_pages = [
    "/walk",
    "/walk/start",
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

function useWindowSize() {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []); // Empty dependency array means this runs once on mount

    return [height, width];
}

const Layout = () => {
    const [user, setUser] = useAtom(userAtom);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const pathname = location.pathname;
    const [height, width] = useWindowSize();

    const showNavigation = !(independent_pages.includes(pathname));

    useEffect(() => {
        setTimeout(() => {{
            setIsLoading(false);
        }}, 2000);
        if(!user && !public_url.includes(pathname)) {
            // @ts-ignore
            setUser(fetchUser());
        }
    }, [])

    const $isMobile = height > width;

    return <S.Wrapper>
        {!$isMobile && (
            <S.Banner alt="banner-left" src={banner_left} />
        )}
        <S.Container $showNavigation={showNavigation} $isMobile={height > width}>
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
        {!$isMobile && (
            <S.Banner alt="banner-left" src={banner_right} />
        )}
    </S.Wrapper>
}

export default Layout;
