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
  DecoratedText, LoadingOverlay, LoadingGIF, LoadingText
} from "../styles/styles";
import Course from "./Course";
import CustomSlider from "./CustomSlider";
import HotPlace from "./HotPlace";
import PlaceSearchCard from "./PlaceSearchCard";
import {Link} from "@/components/common/Link.tsx";
import loadingGIF from "@assets/loading.gif";
import {useAtom} from "jotai";
import {routeAtom, userAtom} from "@/atoms/atoms.ts";
import {useAtomValue} from "jotai/index";

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

const dummyRoute = [
  { lat: 35.317190285088, lng: 129.00304170840155 },
  { lat: 35.31726939771425, lng: 129.00316185288472 },
  { lat: 35.31830924640805, lng: 129.0019973155924 },
  { lat: 35.31797054397812, lng: 129.00149969644477 },
  { lat: 35.317415922679885, lng: 129.002068745145 },
  { lat: 35.316934641667494, lng: 129.00147416233088 },
  { lat: 35.31641477776775, lng: 129.00212102327515 },
  { lat: 35.317190285088, lng: 129.00304170840155 },
];

const WalkStartCard = () => {
  const user = useAtomValue(userAtom);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(90);
  const [isLoading, setLoading] = useState(false);
  const [_, setRoute] = useAtom(routeAtom);

  const generateRoute = async () => {
    setLoading(true);

    // Generate Route...

    setTimeout(() => {
      setLoading(false);
      setStep(6);

      // @ts-ignore
      setRoute(dummyRoute);
    }, 3000)
  }

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
            <ConfirmButton onClick={() => generateRoute()}>없어요</ConfirmButton>
          </Row>
        </Card>
      )}

      {isLoading && (
          <LoadingOverlay>
            <LoadingGIF alt={"로딩 중.."} src={loadingGIF} />
            <LoadingText>AI 맞춤 산책 경로를 생성하고 있어요!</LoadingText>
          </LoadingOverlay>
      )}

      {step === 6 && (
        <Card>
          <TextArea>
            <TitleText>
              AI가 {user.username} 님과 {user.petName}를 위한 산책 경로를 생성했어요!
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