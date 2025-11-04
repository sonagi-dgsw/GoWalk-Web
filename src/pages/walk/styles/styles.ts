import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  // transform: scale(2);
  // transform-origin: center center;
`;

export const Card = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 34px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  font-family: "Pretendard", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 10;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: #000000;
`;

export const Weather = styled.div`
  display: flex;
  align-items: center;
  background: #ffc267;
  border-radius: 99px;
  padding: 4px 14px;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

export const WeatherIcon = styled.span`
  margin-right: 6px;
`;

export const Temp = styled.span``;

export const MiddleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const DistanceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Distance = styled.div`
  font-weight: 600;
  font-size: 26px;
  color: #44423f;
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #44423f;
`;

export const Divider = styled.div`
  width: 1px;
  height: 60px;
  background-color: #cbc8c8;
`;

export const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: #333333;
`;

export const Status = styled.div`
  font-weight: 500;
`;

export const Bad = styled.span`
  color: #f5a623;
  font-weight: 600;
`;

export const Good = styled.span`
  color: #22b14c;
  font-weight: 600;
`;

export const BottomRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const StopButton = styled.button`
  flex: 1;
  background: #f2f2f2;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  font-weight: 600;
  font-size: 16px;
  color: #0a0a0a;
  cursor: pointer;
`;

export const EndButton = styled.button`
  flex: 2;
  background: #5aaaeF;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;

/* --- 모달 오버레이 (dim 처리) --- */
export const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  width: 280px;
  background: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

export const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #181818;
`;

export const ModalSubText = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 16px;
  color: #868686;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 24px;
`;

export const CancelButton = styled.button`
  padding: 15px 20px;
  width: 100%;
  background: #f2f2f2;
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 500;
  color: #0a0a0a;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  padding: 15px 20px;
  width: 100%;
  background: #5aaaeF;
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`; 