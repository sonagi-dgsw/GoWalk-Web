import {useEffect, useRef} from "react";
import { MapContainer } from "./styles/styles";

import WalkInfoCard from "./components/WalkInfoCard";
import * as S from "./styles/styles.ts";
import marker from "@assets/marker.png";

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


const Walk = () => {
    const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<any>(null);
    const userMarkerRef = useRef<any>(null);
    const watchIdRef = useRef<number | null>(null);

    const polylineRef = useRef<any>(null);
    const overlays = [];

    /** 두 좌표 사이 각도 계산 */
    const getAngle = (p1, p2) => {
        const dx = p2.getLng() - p1.getLng();
        const dy = p2.getLat() - p1.getLat();
        return (Math.atan2(dy, dx) * 180) / Math.PI;
    };


    useEffect(() => {
        const onload = () => {
            window.kakao.maps.load(() => {
                if (!navigator.geolocation || !mapRef.current) return;

                /** 지도 초기화 */
                const map = new window.kakao.maps.Map(mapRef.current, {
                    center: new window.kakao.maps.LatLng(37.5665, 126.978),
                    level: 1,
                    draggable: false,
                    zoomable: false,
                });
                mapInstance.current = map;

                /** 사용자 마커 */
                const userMarker = new window.kakao.maps.Marker({
                    map,
                    position: map.getCenter(),
                    image: new window.kakao.maps.MarkerImage(
                        marker,
                        new window.kakao.maps.Size(70, 76),
                        { offset: new window.kakao.maps.Point(20, 42) }
                    ),
                });
                userMarkerRef.current = userMarker;

                /** 실시간 위치 추적 */
                watchIdRef.current = navigator.geolocation.watchPosition(
                    (pos) => {
                        const loc = new window.kakao.maps.LatLng(
                            pos.coords.latitude,
                            pos.coords.longitude
                        );
                        userMarker.setPosition(loc);
                        map.setCenter(loc);
                    },
                    console.error,
                    { enableHighAccuracy: true }
                );

                /** 경로 */
                const linePath = [
                    { lat: 35.317190285088, lng: 129.00304170840155 },
                    { lat: 35.31726939771425, lng: 129.00316185288472 },
                    { lat: 35.31830924640805, lng: 129.0019973155924 },
                    { lat: 35.31797054397812, lng: 129.00149969644477 },
                    { lat: 35.317415922679885, lng: 129.002068745145 },
                    { lat: 35.316934641667494, lng: 129.00147416233088 },
                    { lat: 35.31641477776775, lng: 129.00212102327515 },
                    { lat: 35.317190285088, lng: 129.00304170840155 },
                ].map(p => new window.kakao.maps.LatLng(p.lat, p.lng));

                /** Polyline */
                const polyline = new window.kakao.maps.Polyline({
                    path: linePath,
                    strokeWeight: 10,
                    strokeColor: "#5AAAEF",
                    strokeStyle: "longdash",
                    strokeOpacity: 0.9,
                });
                polyline.setMap(map);
                polylineRef.current = polyline;

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
            });
        };

        if (!window.kakao?.maps) {
            const script = document.createElement("script");
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
            script.async = true;
            document.head.appendChild(script);
            script.onload = onload;
        } else {
            onload();
        }

        /** cleanup */
        return () => {
            if (watchIdRef.current) {
                navigator.geolocation.clearWatch(watchIdRef.current);
            }
            polylineRef.current?.setMap(null);
            overlays.forEach(o => o.setMap(null));
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
