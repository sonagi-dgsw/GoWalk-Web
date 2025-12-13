import { useEffect, useRef } from "react";
import { MapContainer } from "./styles/styles";
import WalkStartCard from "./components/WalkStartCard";
import {routeAtom} from "@/atoms/atoms.ts";
import {useAtom} from "jotai";

const arrowSVG = (angle: number) => `
  <div style="
    transform: rotate(${-angle}deg);
    width: 32px;
    height: 32px;
  ">
    <svg
      fill="none"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <!-- white outline -->
      <path
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
        stroke="white"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <!-- main arrow -->
      <path
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
        stroke="#008ad4"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
`;


const startPointOverlay = `
  <div style="display:flex; flex-direction: column; gap: 5px; justify-content: center; align-items:center;">
    <div style="
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #2E7DFF;
      border: 3px solid white;
    "></div>
    <div style="
      margin-left: 6px;
      font-size: 12px;
      font-weight: bold;
      color: #2E7DFF;
      background: white;
      padding: 2px 6px;
      border-radius: 6px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    ">
      START
    </div>
  </div>
`;


const WalkStart = () => {
    const [route, setRoute] = useAtom(routeAtom);

    const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<any>(null); // 지도 인스턴스 저장
    const userMarkerRef = useRef<any>(null); // 사용자 위치 마커 저장
    const watchIdRef = useRef<number | null>(null); // watchPosition ID 저장
    const overlays = [];

    /** 두 좌표 사이 각도 계산 */
    const getAngle = (p1, p2) => {
        const dx = p2.getLng() - p1.getLng();
        const dy = p2.getLat() - p1.getLat();
        return (Math.atan2(dy, dx) * 180) / Math.PI;
    };

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

        /** 방향 화살표 마커 */
        for (let i = 0; i < linePath.length - 1; i++) {
            const from = linePath[i];
            const to = linePath[i + 1];
            const angle = getAngle(from, to);

            const overlay = new window.kakao.maps.CustomOverlay({
                position: from,
                content: arrowSVG(angle),
                yAnchor: 0.5,
                xAnchor: 0.5,
            });

            overlay.setMap(map);
            overlays.push(overlay);
        }

        const startOverlay = new window.kakao.maps.CustomOverlay({
            position: linePath[0], // 시작 좌표
            content: startPointOverlay,
            xAnchor: 0.5,
            yAnchor: 0.5,
        });

        startOverlay.setMap(map);


        return () => {
            polyline.setMap(null);
            overlays.forEach(o => o.setMap(null));
            startOverlay.setMap(null);
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
