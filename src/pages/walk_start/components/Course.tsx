import { useEffect, useRef } from "react";
import { CourseCard, MapThumb, LabelRow, LabelLeft, LabelRight } from "../styles/styles";

interface CourseProps {
    route: { lat: number; lng: number }[];
    index: number;
}

const Course = ({ route, index }: CourseProps) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const label = String.fromCharCode(65 + index); // 0 → A, 1 → B, 2 → C ...


    useEffect(() => {
        if (!mapRef.current || route.length === 0) return;

        const kakao = window.kakao;

        const map = new kakao.maps.Map(mapRef.current, {
            center: new kakao.maps.LatLng(route[0].lat, route[0].lng),
            level: 4,  // 기본 줌
            draggable: false,
            zoomable: false,
        });

        const linePath = route.map((p) => new kakao.maps.LatLng(p.lat, p.lng));

        const polyline = new kakao.maps.Polyline({
            path: linePath,
            strokeWeight: 6,
            strokeColor: "#2735ed",
            strokeOpacity: 0.9,
        });

        polyline.setMap(map);

        // 경로 기준 자동 범위 설정
        const bounds = new kakao.maps.LatLngBounds();
        linePath.forEach((p) => bounds.extend(p));
        map.setBounds(bounds);
    }, [route]);


    return (
        <CourseCard>
            <MapThumb ref={mapRef} />
            <LabelRow>
                <LabelLeft>추천 {label}</LabelLeft>
                <LabelRight>60분</LabelRight>
            </LabelRow>
        </CourseCard>
    );
};

export default Course;
