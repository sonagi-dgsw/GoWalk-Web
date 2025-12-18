import * as S from "./styles/walkFinishStyle.ts";
import Slide from "../../../components/slide/Slide.tsx";
import {useNavigate} from "react-router";
import {useEffect, useRef, useState} from "react";
import {useAtomValue} from "jotai/index";
import {routeAtom, userAtom} from "@/atoms/atoms.ts";

const WalkFinishPage = () => {
    const navigate = useNavigate();
    const [distanceFeedback, setDistanceFeedback] = useState(3);
    const [moodFeedback, setMoodFeedback] = useState(3);
    const route = useAtomValue(routeAtom);

    const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<any>(null); // 지도 인스턴스 저장

    let polyline = null;
    const polylineRef = useRef<any>(null);

    const onload = () => {
        window.kakao.maps.load(() => {
            if (navigator.geolocation && mapRef.current) {
                // 기본 지도 초기화 (서울 중심)
                const mapOptions = {
                    center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                    level: 4,
                    draggable: false,
                    zoomable: false,
                };
                const map = new window.kakao.maps.Map(mapRef.current!, mapOptions);
                mapInstance.current = map;

                /** 경로 */
                const linePath = route.map(p => new window.kakao.maps.LatLng(p.lat, p.lng));

                map.setCenter(linePath[0]);

                /** Polyline */
                polyline = new window.kakao.maps.Polyline({
                    path: linePath,
                    strokeWeight: 10,
                    strokeColor: "#5AAAEF",
                    strokeStyle: "solid",
                    strokeOpacity: 0.9,
                });
                polyline.setMap(map);
                polylineRef.current = polyline;
            }
        });
    };

    useEffect(() => {
        if(!window.kakao?.maps) {
            const script = document.createElement("script");
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
            script.async = true;
            document.head.appendChild(script);

            script.onload = onload;
        } else onload();

        //  useEffect cleanup (언마운트 시 추적 중지)
        return () => {
            if(polyline){
                polyline?.setMap(null);
            }
        };
    }, []);

    const onFinish = () => {
        navigate("/");
    }

    return <S.Wrapper>
        <S.Header>
            <S.HeaderTitle>오늘의 산책 리포트</S.HeaderTitle>
        </S.Header>
        <S.Container>
            <S.Card>
                <S.CardTitle>산책 요약</S.CardTitle>

                <S.RouteMap ref={mapRef} />

                <S.Stat>
                    <S.StatTitle>산책 시간</S.StatTitle>
                    <S.StatValue>03:21:13</S.StatValue>
                </S.Stat>

                <S.Stat>
                    <S.StatTitle>산책 거리</S.StatTitle>
                    <S.StatValue>3.4km</S.StatValue>
                </S.Stat>

                <S.Stat>
                    <S.StatTitle>소모 칼로리</S.StatTitle>
                    <S.StatValue>132.1kcal</S.StatValue>
                </S.Stat>

                <S.InformationMessage>산책가자가 제공하는 칼로리 정보는 정확하지 않을 수 있으며, 참고용으로 사용하시기를 권장합니다.</S.InformationMessage>
            </S.Card>
            <S.Card>
                <S.CardTitle>오늘 산책 어땠나요?</S.CardTitle>

                <Slide value={distanceFeedback} setFn={setDistanceFeedback} label={'산책 거리'} messages={['짧다', '적당하다', '길다']} />

                <Slide value={moodFeedback} setFn={setMoodFeedback} label={'분위기'} messages={['한적하다', '적당하다', '시끄럽다 ']} />
            </S.Card>
        </S.Container>
        <S.FinishButton onClick={onFinish}>
            종료하기
        </S.FinishButton>
    </S.Wrapper>;
}

export default WalkFinishPage;