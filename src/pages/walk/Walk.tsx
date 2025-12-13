import { useEffect, useRef } from "react";
import { MapContainer } from "./styles/styles";

import petshop from '../walk/assets/petshop.png';
import WalkInfoCard from "./components/WalkInfoCard";
import * as S from "./styles/styles.ts";

const Walk = () => {
    const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<any>(null); // 지도 인스턴스 저장
    const userMarkerRef = useRef<any>(null); // 사용자 위치 마커 저장
    const watchIdRef = useRef<number | null>(null); // watchPosition ID 저장

    useEffect(() => {
        const onload = () => {
            window.kakao.maps.load(() => {
                if (navigator.geolocation && mapRef.current) {
                    // 기본 지도 초기화 (서울 중심)
                    const mapOptions = {
                        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                        level: 1,
                        draggable: false,
                        zoomable: false,
                    };
                    const map = new window.kakao.maps.Map(mapRef.current!, mapOptions);
                    mapInstance.current = map;

                    // 마커 이미지 설정
                    const imageSrc =
                        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커 이미지 URL
                    const imageSize = new window.kakao.maps.Size(40, 42);
                    const imageOption = { offset: new window.kakao.maps.Point(20, 42) };
                    const markerImage = new window.kakao.maps.MarkerImage(
                        imageSrc,
                        imageSize,
                        imageOption
                    );

                    // 펫샵 마커
                    const petshopImage = new window.kakao.maps.MarkerImage(
                        petshop,
                        imageSize,
                        imageOption
                    );

                    // 사용자 위치 마커 생성
                    const userMarker = new window.kakao.maps.Marker({
                        map,
                        position: map.getCenter(),
                        image: markerImage,
                    });
                    userMarkerRef.current = userMarker;

                    // 실시간 위치 추적
                    const watchId = navigator.geolocation.watchPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            const loc = new window.kakao.maps.LatLng(latitude, longitude);

                            // 마커 위치 갱신
                            userMarker.setPosition(loc);

                            // 지도 중심 이동
                            map.setCenter(loc);
                            console.log("현재 위치:", latitude, longitude);
                        },
                        (error) => {
                            console.error("위치 추적 실패:", error);
                        },
                        {
                            enableHighAccuracy: true,
                            maximumAge: 0,
                            timeout: 5000,
                        }
                    );

                    watchIdRef.current = watchId; // cleanup용으로 저장

                    // 경로 표시
                    const linePath = [
                        new window.kakao.maps.LatLng(35.66218448, 128.41384105),
                        new window.kakao.maps.LatLng(35.66224522, 128.41406133),
                        new window.kakao.maps.LatLng(35.66231541, 128.41427812),
                        new window.kakao.maps.LatLng(35.66238690, 128.41448055),
                        new window.kakao.maps.LatLng(35.66245012, 128.41465088),
                        new window.kakao.maps.LatLng(35.66249514, 128.41482099),
                        new window.kakao.maps.LatLng(35.66251045, 128.41499012),

                        new window.kakao.maps.LatLng(35.66248011, 128.41515055),
                        new window.kakao.maps.LatLng(35.66242098, 128.41530033),
                        new window.kakao.maps.LatLng(35.66233042, 128.41543012),

                        new window.kakao.maps.LatLng(35.66221078, 128.41551099),
                        new window.kakao.maps.LatLng(35.66209088, 128.41552013),
                        new window.kakao.maps.LatLng(35.66198055, 128.41546054),

                        new window.kakao.maps.LatLng(35.66190033, 128.41534022),
                        new window.kakao.maps.LatLng(35.66184015, 128.41518044),
                        new window.kakao.maps.LatLng(35.66181011, 128.41498022),

                        new window.kakao.maps.LatLng(35.66182544, 128.41477033),
                        new window.kakao.maps.LatLng(35.66188041, 128.41456055),
                        new window.kakao.maps.LatLng(35.66196022, 128.41437044),

                        new window.kakao.maps.LatLng(35.66204412, 128.41418598),
                        new window.kakao.maps.LatLng(35.66212488, 128.41402077),
                        new window.kakao.maps.LatLng(35.66218448, 128.41384105),
                    ];




                    const polyline = new window.kakao.maps.Polyline({
                        path: linePath,
                        strokeWeight: 10,
                        strokeColor: "#EF895A",
                        strokeOpacity: 0.9,
                        strokeStyle: "solid",
                    });

                    polyline.setMap(map);
                }
            });
        };

        if(!window.kakao?.maps) {
            const script = document.createElement("script");
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
            script.async = true;
            document.head.appendChild(script);

            script.onload = onload;
        } else onload();

        //  useEffect cleanup (언마운트 시 추적 중지)
        return () => {
            if (watchIdRef.current !== null) {
                navigator.geolocation.clearWatch(watchIdRef.current);
            }
        };
    }, []);

    return (
        <S.Wrapper>
            <MapContainer ref={mapRef} />
            <WalkInfoCard />
        </S.Wrapper>

    );
};

export default Walk;
