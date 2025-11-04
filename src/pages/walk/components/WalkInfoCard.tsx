import { useState } from "react";
import {
  Card,
  TopRow,
  Time,
  Weather,
  WeatherIcon,
  Temp,
  MiddleRow,
  DistanceBox,
  Distance,
  Label,
  Divider,
  StatusBox,
  Status,
  Bad,
  Good,
  BottomRow,
  StopButton,
  EndButton,
} from "../styles/styles";
import ConfirmModal from "./ConfirmModal";
import {useNavigate} from "react-router";

const WalkInfoCard = () => {
  const navigate = useNavigate();

  const [showStopModal, setShowStopModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);

  const handleStop = () => setShowStopModal(true);
  const handleEnd = () => setShowEndModal(true);

  const handleCancel = () => {
    setShowStopModal(false);
    setShowEndModal(false);
  };

  const handleStopConfirm = () => {
    setShowStopModal(false);
    alert("산책 종료 (기록되지 않음)");
    navigate("/");
  };

  const handleEndConfirm = () => {
    setShowEndModal(false);
    alert("산책 기록 완료 후 종료");
    navigate("/walk/finish");
  };

  return (
    <>
      <Card>
        <TopRow>
          <Time>54:07:11</Time>
          <Weather>
            <WeatherIcon>☁️</WeatherIcon>
            <Temp>36°C</Temp>
          </Weather>
        </TopRow>

        <MiddleRow>
          <DistanceBox>
            <Distance>3.1km</Distance>
            <Label>남음</Label>
          </DistanceBox>
          <Divider />
          <StatusBox>
            <Status>
              미세먼지 <Bad>나쁨(86µg/m²)</Bad>
            </Status>
            <Status>
              자외선지수 <Good>좋음(0)</Good>
            </Status>
          </StatusBox>
        </MiddleRow>

        <BottomRow>
          <StopButton onClick={handleStop}>그만하기</StopButton>
          <EndButton onClick={handleEnd}>산책 기록 후 종료</EndButton>
        </BottomRow>
      </Card>

      {/* 그만하기 모달 */}
      <ConfirmModal
        open={showStopModal}
        title="정말 그만하실건가요?"
        message="바로 종료 시 산책 내용이 기록되지 않습니다."
        onCancel={handleCancel}
        onConfirm={handleStopConfirm}
      />

      {/* 기록 후 종료 모달 */}
      <ConfirmModal
        open={showEndModal}
        title="오늘의 산책을 끝내시겠습니까?"
        message="산책 내용은 모두 자동 기록됩니다."
        onCancel={handleCancel}
        onConfirm={handleEndConfirm}
      />
    </>
  );
};

export default WalkInfoCard;