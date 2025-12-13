import { useState } from "react";
import {
  Card,
  TextArea,
  TitleText,
  DescriptionText,
  ButtonArea,
  ButtonText,
  CancelButton,
  ConfirmButton,
  Row,
  DecoratedText
} from "../styles/styles";
import Course from "./Course";
import CustomSlider from "./CustomSlider";
import HotPlace from "./HotPlace";
import PlaceSearchCard from "./PlaceSearchCard";
import {useNavigate} from "react-router-dom";
import {Link} from "@/components/common/Link.tsx";

const hotPlaceData = [
  { name: "홈파인 카페", category: "카페", distance: "3분 거리", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuQN7z7rNlkUVrejKyNYOfq4mPOQXvNPAZA&s" },
  { name: "포산공원", category: "근린공원", distance: "7분 거리", imgUrl: "https://www.gyeongju.go.kr/upload/content/thumb/20200626/F5141F5F0AC64946BA67270CE330332C.jpg" },
  { name: "또 다른 공원", category: "공원", distance: "5분 거리", imgUrl: "https://www.jeonmae.co.kr/news/photo/202205/889304_581342_1115.jpg" },
  { name: "또 다른 공원", category: "공원", distance: "5분 거리", imgUrl: "https://www.jeonmae.co.kr/news/photo/202205/889304_581342_1115.jpg" },
  { name: "또 다른 공원", category: "공원", distance: "5분 거리", imgUrl: "https://www.jeonmae.co.kr/news/photo/202205/889304_581342_1115.jpg" }

];

// eslint-disable-next-line react-refresh/only-export-components
export const exampleRoutes = [
  [
    { lat: 35.662184, lng: 128.417200 },
    { lat: 35.663700, lng: 128.416600 },
    { lat: 35.664600, lng: 128.415000 },
    { lat: 35.664000, lng: 128.413300 },
    { lat: 35.662184, lng: 128.412300 },
    { lat: 35.660300, lng: 128.413300 },
    { lat: 35.659800, lng: 128.415000 },
    { lat: 35.660600, lng: 128.416600 },
    { lat: 35.662184, lng: 128.417200 }
  ],

  [
    { lat: 35.664800, lng: 128.413841 },
    { lat: 35.664300, lng: 128.415200 },
    { lat: 35.662184, lng: 128.416000 },
    { lat: 35.660100, lng: 128.415200 },
    { lat: 35.659600, lng: 128.413841 },
    { lat: 35.660100, lng: 128.412482 },
    { lat: 35.662184, lng: 128.411700 },
    { lat: 35.664300, lng: 128.412482 },
    { lat: 35.664800, lng: 128.413841 }
  ],

  [
    { lat: 35.663800, lng: 128.413841 },
    { lat: 35.662184, lng: 128.417500 },
    { lat: 35.660000, lng: 128.413841 },
    { lat: 35.663800, lng: 128.413841 }
  ],

  [
    { lat: 35.664500, lng: 128.415500 },
    { lat: 35.664500, lng: 128.412200 },
    { lat: 35.659900, lng: 128.412200 },
    { lat: 35.659900, lng: 128.415500 },
    { lat: 35.664500, lng: 128.415500 }
  ],

  [
    { lat: 35.663300, lng: 128.413841 },
    { lat: 35.662600, lng: 128.415200 },
    { lat: 35.662184, lng: 128.414300 },
    { lat: 35.661700, lng: 128.415200 },
    { lat: 35.661000, lng: 128.413841 },
    { lat: 35.661700, lng: 128.412482 },
    { lat: 35.662184, lng: 128.413300 },
    { lat: 35.662600, lng: 128.412482 },
    { lat: 35.663300, lng: 128.413841 }
  ]
];


const WalkStartCard = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(90);

  return (
    <>
      {step === 1 && (
        <Card>
          <TextArea>
            <TitleText>
              산책을 시작하기 전에 {"\n"}어떻게 산책할지 정해볼까요?
            </TitleText>
            <DescriptionText>
              먼저 근처 반려인들의 산책 경향을 분석해볼게요.
            </DescriptionText>
          </TextArea>

          <ButtonArea onClick={() => setStep(2)}>
            <ButtonText>다음으로</ButtonText>
          </ButtonArea>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <TextArea>
            <TitleText>
              이웃 반려인의 만족도가 높았던{"\n"}산책로를 이용해볼까요?
            </TitleText>
          </TextArea>

          <Row>
            {exampleRoutes.map((r, i) => (
              <Course key={i} route={r} index={i} />
            ))}
          </Row>


          <Row>
            <CancelButton onClick={() => setStep(1)}>이전으로</CancelButton>
            <ConfirmButton onClick={() => setStep(3)}>괜찮아요</ConfirmButton>
          </Row>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <TextArea>
            <TitleText>
              몇 분 동안 산책할까요?
            </TitleText>
            <DescriptionText>
              성견 웰시코기는 보통 <DecoratedText>50분~60분</DecoratedText> 이 적당해요.
            </DescriptionText>
          </TextArea>
          <CustomSlider
            value={value}
            onChange={(v) => setValue(v)}
            orangeStart={50}
            orangeEnd={60}
          />
          <ButtonArea onClick={() => setStep(4)}>
            <ButtonText>다음으로</ButtonText>
          </ButtonArea>
        </Card>
      )}
      {step === 4 && (
        <Card>
          <TextArea>
            <TitleText>
              주변의 핫플레이스를{"\n"}추천해드릴게요!
            </TitleText>
            <DescriptionText>
              산책 중간중간 들러볼 만한 장소들이에요.
            </DescriptionText>
          </TextArea>

          <Row>
            {hotPlaceData.map((place, index) => (
              <HotPlace
                key={index}
                name={place.name}
                category={place.category}
                distance={place.distance}
                imgUrl={place.imgUrl}
              />
            ))}
          </Row>


          <Row>
            <CancelButton onClick={() => setStep(3)}>이전으로</CancelButton>
            <ConfirmButton onClick={() => setStep(5)}>괜찮아요</ConfirmButton>
          </Row>
        </Card>
      )}

      {step === 5 && (
        <Card>
          <TextArea>
            <TitleText>
              그렇다면 내가 들러야 할 곳이 있나요?
            </TitleText>
          </TextArea>

          <PlaceSearchCard onSearch={(placeName) => alert(`검색된 장소: ${placeName}`)} />

          <Row>
            <CancelButton onClick={() => setStep(4)}>이전으로</CancelButton>
            <ConfirmButton onClick={() => setStep(6)}>없어요</ConfirmButton>
          </Row>
        </Card>
      )}
      {step === 6 && (
        <Card>
          <TextArea>
            <TitleText>
              AI가 권대형 님과 뽀삐를 위한 산책 경로를 생성했어요!
            </TitleText>
            <DescriptionText>
              견주와 반려견을 모두 고려한 경로에요.
              </DescriptionText>
          </TextArea>
          <Link to={"/walk"}>
            <ButtonArea>
              <ButtonText>산책 시작하기</ButtonText>
            </ButtonArea>
          </Link>
        </Card>
      )}
        </>
      );
};

      export default WalkStartCard;