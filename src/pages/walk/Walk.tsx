import { useEffect, useRef } from "react";
import { MapContainer } from "./styles/styles";
import petshop from '../walk/assets/petshop.png';
import WalkInfoCard from "./components/WalkInfoCard";

const Walk = () => {
    const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<any>(null); // 지도 인스턴스 저장
    const userMarkerRef = useRef<any>(null); // 사용자 위치 마커 저장
    const watchIdRef = useRef<number | null>(null); // watchPosition ID 저장


    useEffect(() => {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                if (navigator.geolocation && mapRef.current) {
                    // 기본 지도 초기화 (서울 중심)
                    const mapOptions = {
                        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                        level: 1,
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
                }
            });
        };

        //  useEffect cleanup (언마운트 시 추적 중지)
        return () => {
            if (watchIdRef.current !== null) {
                navigator.geolocation.clearWatch(watchIdRef.current);
            }
        };
    }, []);

    return (
        <div style={{ position: "relative", height: "100vh" }}>
            <MapContainer ref={mapRef} />
            <WalkInfoCard />
        </div>

    );
};

export default Walk;
