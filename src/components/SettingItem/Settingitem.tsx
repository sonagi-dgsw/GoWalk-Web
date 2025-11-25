import * as S from "/Users/ghkdrudals/Desktop/programming/WEB/Gowalk-Web-Setting/src/components/SettingItem/SettingItem.ts";
import React from "react";

export default function SettingItem({ icon, label }: { icon: string; label: string }) {
  return (
    <S.Item>
      <S.Icon url={icon} />
      <S.Label>{label}</S.Label>
    </S.Item>
  );
}