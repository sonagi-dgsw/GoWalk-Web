import * as S from "@/components/SettingItem/SettingItem.ts";
import React from "react";

export default function SettingItem({ icon, label }: { icon: string; label: string }) {
  return (
    <S.Item>
      <S.Icon url={icon} />
      <S.Label>{label}</S.Label>
    </S.Item>
  );
}