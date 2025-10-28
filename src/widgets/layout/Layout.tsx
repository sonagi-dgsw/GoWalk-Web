import * as S from "./styles/layoutStyle.ts";
import "./styles/reset.css";
import {Outlet} from "react-router";

const Layout = () => {
    return <S.Wrapper>
        <S.Container>
            <Outlet />
        </S.Container>
    </S.Wrapper>
}

export default Layout;