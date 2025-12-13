import {useEffect, useState} from "react";
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
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = null;

    intervalId = setInterval(() => {
      setTime(prev => prev+1);
    }, 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [])

  const handleStop = () => setShowStopModal(true);
  const handleEnd = () => setShowEndModal(true);

  const handleCancel = () => {
    setShowStopModal(false);
    setShowEndModal(false);
  };

  const handleStopConfirm = () => {
    setShowStopModal(false);
    navigate("/");
  };

  const handleEndConfirm = () => {
    setShowEndModal(false);
    navigate("/walk/finish");
  };

  return (
    <>
      <Card>
        <TopRow>
          <Time>{Math.floor(time / 3600) % 24}:{(Math.floor(time / 60) % 60).toString().padStart(2, "0")}:{(time % 60).toString().padStart(2, "0")}</Time>
          <Weather>
            <WeatherIcon>☁️</WeatherIcon>
            <Temp>- °C</Temp>
          </Weather>
        </TopRow>

        <MiddleRow>
          <DistanceBox>
            <Distance>- km</Distance>
            <Label>남음</Label>
          </DistanceBox>
          <Divider />
          <StatusBox>
            <Status>
              미세먼지 <Bad>-(-µg/m²)</Bad>
            </Status>
            <Status>
              자외선지수 <Good>-(-)</Good>
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