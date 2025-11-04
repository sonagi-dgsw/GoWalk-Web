import * as S from "./styles/layoutStyle.ts";
import "./styles/reset.css";
import {Outlet, useLocation} from "react-router";
import Navigation from "../navigation/Navigation.tsx";

// Navigation 보여주지 않는 페이지 목록
const independent_pages = [
    "/walk/finish"
]

const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const showNavigation = !(independent_pages.includes(pathname));

    return <S.Wrapper>
        <S.Container $showNavigation={showNavigation}>
            <S.Content>
                <Outlet />
            </S.Content>
            {showNavigation && <Navigation />}
        </S.Container>
    </S.Wrapper>
}

export default Layout;