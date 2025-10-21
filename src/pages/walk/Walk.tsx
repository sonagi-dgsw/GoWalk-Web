import { useEffect, useRef, useState } from "react";
import { MapContainer } from "./styles/styles";


const Walk = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<any>(null); // 지도 인스턴스 저장

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=APP_KEY&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        // 스크립트 로드
        script.onload = () => {

            // 카카오 지도 API 로드
            window.kakao.maps.load(() => {

                // 현재 위치 가져오기
                if (navigator.geolocation && mapRef.current) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const { latitude, longitude } = position.coords;

                        // 지도 옵션
                        const mapOptions = {
                            center: new window.kakao.maps.LatLng(latitude, longitude),
                            level: 3,
                        };

                        // 지도 생성
                        const map = new window.kakao.maps.Map(mapRef.current!, mapOptions);
                        mapInstance.current = map;

                        // 마커 이미지
                        const imageSrc =
                            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커 이미지 URL
                        const imageSize = new window.kakao.maps.Size(40, 42);
                        const imageOption = { offset: new window.kakao.maps.Point(20, 42) };
                        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

                        // 사용자 위치 마커
                        const userMarker = new window.kakao.maps.Marker({
                            map,
                            position: new window.kakao.maps.LatLng(latitude, longitude),
                        });

                    });
                }
            });
        };
    }, []);

    return <MapContainer ref={mapRef} />;
};

export default Walk;
