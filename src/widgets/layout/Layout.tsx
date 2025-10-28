import * as S from "./styles/layoutStyle.ts";
import "./styles/reset.css";
import {Outlet} from "react-router";

const Layout = () => {
    const now: Date = new Date();
    return <S.Wrapper>
        <S.Container>
            <S.StatusBar>
                {`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`}
            </S.StatusBar>
            <S.Content>
                <Outlet />
            </S.Content>
        </S.Container>
    </S.Wrapper>
}

export default Layout;