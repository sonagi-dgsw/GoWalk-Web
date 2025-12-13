import * as S from "@/components/SettingItem/SettingItem.ts";
import React from "react";

export default function SettingItem({ icon, label, onClick }: { icon: string; label: string, onClick?: () => void }) {
  return (
    <S.Item onClick={onClick}>
      <S.Icon url={icon} />
      <S.Label>{label}</S.Label>
    </S.Item>
  );
}