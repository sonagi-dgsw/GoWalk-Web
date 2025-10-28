import React, { useState } from "react";
import "./styles/Ranking.css";
import { RankingProps } from "./types/Ranking_type";

const rankingData: RankingProps[] = [
  { id: "권대형 좋아해", name: "광진", distance: 34.0, time: 15 },
  { id: "권대형 사랑해", name: "광진동", distance: 35.0, time: 14 },
  { id: "권대형 사모해", name: "광진", distance: 33.0, time: 13 },
  { id: "大型最高", name: "길동", distance: 2.7, time: 12 },
];

const Ranking: React.FC = () => {
  const [mode, setMode] = useState<"distance" | "time">("distance");

  const sortedData = [...rankingData].sort((a, b) =>
    mode === "distance" ? b.distance - a.distance : b.time - a.time
  );

  const top3 = sortedData.slice(0, 3);
  const others = sortedData.slice(3);

  const renderValue = (item: RankingProps) =>
    mode === "distance" ? `${item.distance.toFixed(1)}km` : `${item.time}시간`;

  return (
    <div className="container">
      <div className="header">
        <div className="tabs">
          <div
            className={`tab ${mode === "distance" ? "active" : ""}`}
            onClick={() => setMode("distance")}
          >
            거리
          </div>
          <div
            className={`tab ${mode === "time" ? "active" : ""}`}
            onClick={() => setMode("time")}
          >
            시간
          </div>
        </div>
      </div>

      {/* 👑 Top 3 */}
      <div className="top3">
  {[top3[1], top3[0], top3[2]].map((item, i) => {
    if (!item) return null;
    const rank = i === 0 ? 2 : i === 1 ? 1 : 3; // 왼쪽2, 가운데1, 오른쪽3
    const offsetY =
      rank === 1 ? "-12px" : "8px"; // 1등만 살짝 위로
    return (
      <div
        key={item.id}
        className="rank"
        style={{ transform: `translateY(${offsetY})` }}
      >
        <div className="avatar">
            <div className={`badge badge-${rank}`}>{rank}</div>
          <img
            src={`https://placekitten.com/${80 + i}/${80 + i}`}
            alt=""
          />
          {/* 순위 배지 */}
        </div>
        <div className="name">{item.id}</div>
        <div className="value">{renderValue(item)}</div>
      </div>
    );
  })}
</div>


      {/* 나머지 리스트 */}
      <div className="list">
        {others.map((item) => (
          <div key={item.id} className="list-item">
            <div className="info">
              <div className="avatar">
                <img src="https://placekitten.com/50/50" alt="" />
              </div>
              <div className="info-text">
                <div className="name">{item.id}</div>
                <div className="meta">{item.name}</div>
              </div>
            </div>
            <div className="value">{renderValue(item)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
