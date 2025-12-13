import styled from "styled-components";
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface RangeInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  'data-value'?: string;
}

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Card = styled.div`
  position: absolute;
  bottom: 34px;
  left: 12px;
  right: 12px;

  background: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  z-index: 10;

  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-x: hidden;
`;


export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const TitleText = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #181818;
  white-space: pre-wrap;
`;

export const DescriptionText = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #868686;
  white-space: pre-wrap;
`;

export const DecoratedText = styled.span`
   color: #ef895a;
`;

export const ButtonArea = styled.button`
  flex-shrink: 0;
  width: 100%;
  height: 60px;
  background: #5aaaeF;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;      
  outline: none;     
  cursor: pointer; 
  margin-top: 45px;
`;

export const ButtonText = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;

export const CancelButton = styled.button`
  width: 162px;
  height: 60px;
  background: #f2f2f2;
  border: none;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 500;
  color: #0a0a0a;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  width: 162px;
  height: 60px;
  background: #5aaaeF;
  border: none;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  overflow-x: auto;
  overflow-y: hidden;

  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  flex-shrink: 0;
`;


export const CourseCard = styled.div`
  width: 160px;         
  min-width: 160px;     
  flex-shrink: 0;        
  
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: white;
  padding: 8px;
  border: 2px solid #E8E8E8;
`;


export const MapThumb = styled.div`
  width: 126px;
  height: 89px;
  border-radius: 8px;
  margin: 10px auto 0 auto;
  overflow: hidden;
  pointer-events: none;
`;


export const LabelLeft = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  color: #373737;
`;

export const LabelRight = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  color: #ef895a;
  text-align: right;
`;


export const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 12px;
  margin-top: 7px;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px; 
`;

export const Track = styled.div`
  width: 100%;
  height: 8px; 
  background: #C7C7C7; 
  border-radius: 4px;
  position: absolute;
  top: 40%; /* ⭐ 수정: 위로 이동 ⭐ */
  transform: translateY(-50%);
`;

export const Progress = styled.div<{ value: number }>`
  height: 8px; 
  background: #5AAAEF; 
  width: ${({ value }) => value}%;
  border-radius: 4px;
  position: absolute;
  top: 40%; /* ⭐ 수정: 위로 이동 ⭐ */
  transform: translateY(-50%);
  z-index: 2; 
`;

export const OrangeRange = styled.div<{ start: number; end: number }>`
  height: 8px; 
  background: #EF895A;
  width: ${({ start, end }) => end - start}%;
  left: ${({ start }) => start}%;
  border-radius: 4px;
  position: absolute;
  top: 40%; /* ⭐ 수정: 위로 이동 ⭐ */
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 3; 
`;

export const ThumbContainer = styled.div<{ valuePercent: number }>`
  position: absolute;
  top: 5px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  pointer-events: none;

  left: ${props => `${props.valuePercent}%`}; 
  transform: translateX(-50%); 
`;

export const ThumbLabel = styled.div`
  box-sizing: border-box;
  padding: 3px 6px; 
  background: #FFFFFF;
  border: 4px solid #5AAAEF;
  border-radius: 20px;
  
  font-family: Pretendard, -apple-system, sans-serif;
  font-weight: 700;
  line-height: 28px;
  color: #000000;
  white-space: nowrap;
`;

export const AIText = styled.div<{ startPercent: number }>`
  position: absolute;
  
  left: ${props => `${props.startPercent}%`}; 
  transform: translateX(-50%); 
  
  top: 40px; /* ⭐ 수정: 트랙 아래 충분한 공간에 위치 ⭐ */
  
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #EF895A;
  white-space: nowrap;
  pointer-events: none;
  z-index: 5;
`;

export const RangeInput = styled.input.attrs<RangeInputProps>(() => ({}))`
    appearance: none;
    width: 100%;
    height: 10px;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 40%; /* ⭐ 수정: 위로 이동 ⭐ */
    transform: translateY(-50%);
    z-index: 5; 

    &::-webkit-slider-thumb {
        appearance: none;
        width: 15px; 
        height: 15px;
        background: #5AAAEF; 
        border-radius: 50%;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        position: relative;
    }

    &::-moz-range-thumb {
        width: 15px;
        height: 15px;
        background: #5AAAEF;
        border-radius: 50%;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
    
    &::-ms-thumb {
        width: 15px;
        height: 15px;
        background: #5AAAEF;
        border-radius: 50%;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
    
    &::-webkit-slider-runnable-track {
        height: 8px;
        background: transparent;
    }
    
    &::-moz-range-track {
        height: 8px;
        background: transparent;
    }
`;

export const SliderLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  margin-top: 35px; /* ⭐ 수정: 트랙 아래 더 많은 간격 확보 (40% 트랙 위치에 맞춤) ⭐ */
`;

export const SliderLabelTextLeft = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  color: #C2BFBF; /* 옅은 회색 */
`;

// SliderLabelTextRight: 2시간 레이블 스타일
export const SliderLabelTextRight = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  color: #C2BFBF; /* 옅은 회색 */
  text-align: right;
`;

export const CategoryText = styled.p`
    /* 웹 환경 (p 태그 가정) */
    font-size: 11px; 
    color: #888888; /* 연한 회색 */
    padding: 0 10px 10px; /* 좌우 여백 및 하단 여백 */
    margin: 0;
    
    /* React Native 환경의 경우 */
    /*
    font-size: 11px; 
    color: #888888; 
    padding-horizontal: 10px; 
    padding-bottom: 10px;
    */
`;

export const ImageThumb = styled.div<{ $imgUrl: string }>`
  height: 120px;
  border-radius: 10px 10px 0 0;
  background-image: url(${props => props.$imgUrl});
  background-size: cover;
  background-position: center;
`;

export const PlaceInput = styled.input`
  width: 100%;
  height: 50px;
  background: #f8f8f8; /* 배경색 */
  border: 1px solid #e8e8e8; /* 옅은 테두리 */
  border-radius: 12px;
  padding: 0 15px;
  font-size: 18px;
  color: #181818;
  outline: none;
`;

export const SearchResultContainer = styled.div`
  /* 검색 입력 필드 아래에 위치 */
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  margin-top: 10px; /* 입력 필드와 간격 */
`;

export const SearchResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f2f2f2; /* 아이템 구분선 */
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

export const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MainResultText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #181818;
`;

export const SubResultText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #868686;
`;

export const SelectButton = styled.button`
  background: #5aaaeF;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  flex-shrink: 0; /* 공간이 부족해도 줄어들지 않도록 */
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 12px;
`;

// 기존 CancelButton, ConfirmButton 스타일을 ActionRow에 맞게 수정
export const ActionCancelButton = styled.button`
  width: 100%;
  height: 60px;
  background: #f2f2f2;
  border: none;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 500;
  color: #0a0a0a;
  cursor: pointer;
`;

export const ActionConfirmButton = styled.button`
  width: 100%;
  height: 60px;
  background: #b0b0b0; /* '없어요' 버튼은 회색으로 시작 */
  border: none;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;

  &.active {
      background: #5aaaeF; /* 활성화 시 파란색 */
  }
`;