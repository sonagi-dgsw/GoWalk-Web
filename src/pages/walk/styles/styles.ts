import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

// ===== Map Info =====
export const MapInfo = styled.div`
  position: absolute;
  width: 378px;
  height: 238px;
  left: 12px;
  bottom: 34px;
  background: #ffffff;
  border-radius: 20px;
  padding: 16px;
`;

// ===== 텍스트 =====
export const TimeText = styled.div`
  position: absolute;
  width: 118px;
  height: 28px;
  left: 19px;
  top: 27px;

  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -1px;
  color: #000000;
`;

export const DistanceText = styled.div`
  position: absolute;
  width: 66px;
  height: 28px;
  left: 45px;
  top: 82px;

  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -1px;
  color: #44423F;
`;

export const RemainingText = styled.div`
  position: absolute;
  width: 31px;
  height: 28px;
  left: 63px;
  top: 108.83px;

  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -1px;
  color: #44423F;
`;

// ===== 버튼 프레임 =====
export const ButtonFrame = styled.button<{ bgColor?: string; color?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 18px;
  gap: 10px;

  position: absolute;
  width: ${(props) => (props.bgColor ? "212px" : "115px")};
  height: 44px;
  left: ${(props) => (props.bgColor ? "143px" : "23px")};
  bottom: 23px;

  background: ${(props) => props.bgColor || "#F2F2F2"};
  border-radius: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: ${(props) => props.color || "#0A0A0A"};
  border: none;
  cursor: pointer;
`;

// ===== 날씨 프레임 =====
export const WeatherFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 18px;
  gap: 10px;

  position: absolute;
  width: 123px;
  height: 35px;
  left: 232px;
  top: 19px;

  background: #ffc267;
  border-radius: 99px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  color: #333333;
`;

// ===== 라인 =====
export const Line = styled.div`
  position: absolute;
  width: 54.68px;
  height: 0px;
  left: 147.59px;
  top: 81.83px;
  border: 1px solid #CBC8C8;
  transform: rotate(90deg);
`;
