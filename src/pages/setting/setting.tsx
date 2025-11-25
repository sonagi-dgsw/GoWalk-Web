import React from "react"; 
import * as S from "@/pages/setting/styles/setting.ts";
import SettingItem from "@/components/SettingItem/Settingitem.tsx";
import { useState } from "react";

function Setting() {
    const [isAlarmOn, setIsAlarmOn] = useState(false);
  const onClick = () => {
    if (isAlarmOn) {
      setIsAlarmOn(false);
      return;
    }
    else{
        setIsAlarmOn(true);
    }
  }
  return (
    <S.Container>
      <S.LogoContainer>
      <S.Logo src="src/assets/Gowalk.png"></S.Logo>
      </S.LogoContainer>
      <S.Content>
      <S.Header>← 설정</S.Header>
        <S.SearchBox color={isAlarmOn ? "#5AAAEF" : undefined}>
          <div style={{ display: "flex", alignItems: "center", gap: 8}}>
            <S.Bell src="src/assets/setting/bell.png"/>
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
        <SettingItem icon="src/assets/setting/logout.png" label="로그아웃" />
      </S.Content>
    </S.Container>
  );
}

export default Setting;