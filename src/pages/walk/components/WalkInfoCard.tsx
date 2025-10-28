import React from "react";

import {
  MapInfo,
  TimeText,
  DistanceText,
  RemainingText,
  ButtonFrame,
  WeatherFrame,
  Line
} from "../styles/styles";

const WalkInfoCard = () => {
  return (
    <MapInfo>
      <TimeText>54:07:11</TimeText>
      <DistanceText>3.1km</DistanceText>
      <RemainingText>남음</RemainingText>

      <ButtonFrame>그만하기</ButtonFrame>
      <ButtonFrame bgColor="#5AAAEF" color="#FFF">산책 기록 후 종료</ButtonFrame>

      <WeatherFrame>36°C</WeatherFrame>

      <Line />
    </MapInfo>
  );
};

export default WalkInfoCard;
