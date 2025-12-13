import { useEffect, useRef } from "react";
import { MapContainer } from "./styles/styles";
import WalkStartCard from "./components/WalkStartCard";
import {routeAtom} from "@/atoms/atoms.ts";
import {useAtom} from "jotai";


const WalkStart = () => {
    const [route, setRoute] = useAtom(routeAtom);

    const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<any>(null); // 지도 인스턴스 저장
    const userMarkerRef = useRef<any>(null); // 사용자 위치 마커 저장
    const watchIdRef = useRef<number | null>(null); // watchPosition ID 저장

    const onload = () => {
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

    useEffect(() => {
        // @ts-ignore
        setRoute([]);

        if(!window.kakao?.maps) {
            const script = document.createElement("script");
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
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

    useEffect(() => {
        if(!mapRef.current || route == null || route.length == 0) return;

        const kakao = window.kakao;

        const map = new kakao.maps.Map(mapRef.current, {
            center: new kakao.maps.LatLng(route[0].lat, route[0].lng),
            level: 6,  // 기본 줌
            draggable: false,
            zoomable: false,
        });

        const linePath = route.map((p) => new kakao.maps.LatLng(p.lat, p.lng));

        const polyline = new kakao.maps.Polyline({
            path: linePath,
            strokeWeight: 12,
            strokeColor: "#5AAAEF",
            strokeOpacity: 0.9,
        });

        polyline.setMap(map);

        // 경로 기준 자동 범위 설정
        const bounds = new kakao.maps.LatLngBounds();
        linePath.forEach((p) => bounds.extend(p));
        map.setBounds(bounds);

        return () => {
            polyline.setMap(null);
            onload();
        }
    }, [route]);

    return (
        <div style={{ position: "relative", height: "100%" }}>
            <MapContainer ref={mapRef} />
            <WalkStartCard />
        </div>

    );
};

export default WalkStart;
