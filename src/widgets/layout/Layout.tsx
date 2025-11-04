import * as S from "./styles/layoutStyle.ts";
import "./styles/reset.css";
import {Outlet, useLocation} from "react-router";
import { useState, useEffect } from "react";
import Navigation from "../navigation/Navigation.tsx";

// Navigation 보여주지 않는 페이지 목록
const independent_pages = [
    "/walk/finish"
]

const Layout = () => {
    const [now, setNow] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000); // update every second
        return () => clearInterval(interval);
    }, []);

    const location = useLocation();
    const pathname = location.pathname;

    const showNavigation = !(independent_pages.includes(pathname));

    return <S.Wrapper>
        <S.Container $showNavigation={showNavigation}>
            <S.StatusBar>
                {`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`}
            </S.StatusBar>
            <S.Content>
                <Outlet />
            </S.Content>
            {showNavigation && <Navigation />}
        </S.Container>
    </S.Wrapper>
}

export default Layout;