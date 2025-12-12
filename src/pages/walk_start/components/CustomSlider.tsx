// CustomSlider.js (수정)

import {
    SliderWrapper,
    Track,
    Progress,
    OrangeRange,
    RangeInput,
    ThumbContainer, 
    ThumbLabel,
    AIText,
    SliderLabelRow,
    SliderLabelTextLeft,
    SliderLabelTextRight
} from "../styles/styles";

interface SliderProps {
    value: number;
    onChange: (v: number) => void;
    orangeStart?: number; 
    orangeEnd?: number;   
}

const MAX_MINUTES = 120; 

const CustomSlider = ({ value, onChange, orangeStart = 50, orangeEnd = 60 }: SliderProps) => {
  const valuePercent = (value / MAX_MINUTES) * 100;
  const orangeStartPercent = (orangeStart / MAX_MINUTES) * 100;
  const orangeEndPercent = (orangeEnd / MAX_MINUTES) * 100;
  
  // ⭐ 주황색 영역의 중앙 위치를 계산합니다. ⭐
  // (시작 퍼센트 + 끝 퍼센트) / 2
  const orangeCenterPercent = (orangeStartPercent + orangeEndPercent) / 2; 

  // AI 추천 범위 내에 있는지 확인
  const isAIRecommended = value >= orangeStart && value <= orangeEnd;

  return (
    <SliderWrapper>
      
      <ThumbContainer valuePercent={valuePercent}>
        <ThumbLabel>{value}분</ThumbLabel>
      </ThumbContainer>
      
      {/* ⭐ AIText에 중앙 위치(orangeCenterPercent)를 전달합니다. ⭐ */}
      {orangeEnd > orangeStart && <AIText startPercent={orangeCenterPercent}>AI 추천</AIText>} 

      <Track />
      <Progress value={valuePercent} />

      <OrangeRange start={orangeStartPercent} end={orangeEndPercent} />
      

      <RangeInput
        type="range"
        min={0}
        max={MAX_MINUTES}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      
      <SliderLabelRow>
        <SliderLabelTextLeft>0시간</SliderLabelTextLeft>
        <SliderLabelTextRight>2시간</SliderLabelTextRight>
      </SliderLabelRow>
    </SliderWrapper>
  );
};

export default CustomSlider;