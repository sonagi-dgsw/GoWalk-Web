import React from "react"; 
import * as S from "@/pages/setting/styles/setting.ts";
import SettingItem from "@/components/SettingItem/Settingitem.tsx";
import { useState } from "react";
import {Link} from "react-router";
import logo from "@/pages/home/images/산책가자.png";
import setting from "@/pages/home/images/Vector.png";
import {Cookies} from "react-cookie";
import {useAtom} from "jotai";
import {userAtom} from "@/atoms/atoms.ts";
import bell from "@assets/setting/bell.png";

function Setting() {
    const [isAlarmOn, setIsAlarmOn] = useState(false);
    const [_, setUser] = useAtom(userAtom);
    const  cookies = new Cookies();
  const onClick = () => {
    if (isAlarmOn) {
      setIsAlarmOn(false);
      return;
    }
    else{
        setIsAlarmOn(true);
    }
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    // @ts-ignore
    setUser(null);
    window.location.href = "/signin";
  }

  return (
    <S.Container>
    <div className="header">
        <Link to={"/"} className="tab">
            <img className="logo" src={logo} alt="로고" />
        </Link>
        <Link to={"/setting"} className="tab">
            <img className="setting" src={setting} alt="설정" />
        </Link>
    </div>
      <S.Content>
      <S.Header>설정</S.Header>
        <S.SearchBox color={isAlarmOn ? "#5AAAEF" : undefined}>
          <div style={{ display: "flex", alignItems: "center", gap: 8}}>
            <S.Bell src={bell}/>
            <span>알람 설정</span>
          </div>
          <div style={{ display: "flex", alignItems: "center",position:"relative",left:"12px" }}>
          <S.Toggle />
          <S.ToggleCircle color={isAlarmOn ? "#5AAAEF" : undefined} onClick={onClick}/>
          </div>
        </S.SearchBox>

        <SettingItem icon="src/assets/setting/light.png" label="라이트 모드" />
        <SettingItem icon="src/assets/setting/edit.png" label="정보 변경" />
        <SettingItem icon="src/assets/setting/location.png" label="현재 위치 사용 허용" />
        <SettingItem icon="src/assets/setting/walk.png" label="산책 모드 설정" />
        <SettingItem icon="src/assets/setting/help.png" label="고객센터" />
        <SettingItem icon="src/assets/setting/paper.png" label="이용 약관" />
        <SettingItem icon="src/assets/setting/policy.png" label="개인정보 처리방침" />
        <SettingItem icon="src/assets/setting/logout.png" label="로그아웃" onClick={logout} />
      </S.Content>
    </S.Container>
  );
}

export default Setting;