import * as S from "./styles/layoutStyle.ts";
import "./styles/reset.css";
import {Outlet} from "react-router";
import React, { useState, useEffect } from "react";

const Layout = () => {
    const [now, setNow] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000); // update every second
        return () => clearInterval(interval);
    }, []);
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