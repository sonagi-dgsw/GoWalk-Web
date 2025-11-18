import React from "react";
import "../styles/RecentRoute.css";

interface WalkItem {
  date: string;
  minutes: number;
  img: string;
}

const getRouteImg = (fileName: string) => {
  return `/images/RecentRouteImg/${fileName}`;
};

const walkData: WalkItem[] = [
  {
    date: "10.26(수)",
    minutes: 90,
    img: getRouteImg("walk1.png"),
  },
  {
    date: "11.01(월)",
    minutes: 50,
    img: getRouteImg("walk2.png"),
  },
  {
    date: "11.05(수)",
    minutes: 60,
    img: getRouteImg("walk3.png"),
  },
];


const RecentRoute: React.FC = () => {
  return (
    <div className="walk-history">
      <h3 className="title">최근 산책 경로</h3>
      <div className="history-list">
        {walkData.map((item, idx) => (
          <div className="history-card" key={idx}>
            <img src={item.img} alt="산책 경로" className="route-image" />
            <div className="info-row">
              <span className="date">{item.date}</span>
              <span className="minutes">{item.minutes}분</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentRoute;
