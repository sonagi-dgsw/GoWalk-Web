import React, { useState } from "react";
import "./styles/Ranking.css";
import "../home/styles/Home.css";
import { RankingProps } from "./types/Ranking_type";
import guest from "./images/guest.png";
import RankingItem from "./components/RankingItem.tsx";
import logo from "../home/images/산책가자.png";
import setting from "../home/images/Vector.png";
import {Link} from "react-router";

const rankingData: RankingProps[] = [
    { id: "권대형 좋아해", name: "광진", distance: 34.0, time: 15, isMe: false, rank: 2 },
    { id: "권대형 사랑해", name: "광진동", distance: 35.0, time: 14, isMe: false, rank: 1 },
    { id: "권대형 사모해", name: "광진", distance: 33.0, time: 13, isMe: false, rank: 3 },
    { id: "大型最高", name: "길동", distance: 2.7, time: 12, isMe: false, rank: 4 },
    { id: "大型最高", name: "길동", distance: 2.7, time: 12, isMe: false, rank: 5 },
    { id: "大型最高", name: "길동", distance: 2.7, time: 12, isMe: false, rank: 6 },
    { id: "大型最高", name: "길동", distance: 2.7, time: 12, isMe: false, rank: 7 },
    { id: "大型最高", name: "길동", distance: 2.7, time: 12, isMe: false, rank: 8 },
    { id: "大型最高", name: "길동", distance: 2.7, time: 12, isMe: false, rank: 9 },
    { id: "大型最高", name: "길동", distance: 2.7, time: 12, isMe: false, rank: 10 },
    {
        id: "권대형",
        name: "권대형입니다.",
        distance: 0.2,
        time: 3,
        isMe: true,
        rank: 12
    }
];

const Ranking: React.FC = () => {
    const [mode, setMode] = useState<"distance" | "time">("distance");

    const sortedData = [...rankingData].sort((a, b) =>
        mode === "distance" ? b.distance - a.distance : b.time - a.time
    );

    const top3 = sortedData.slice(0, 3);
    const others = sortedData.slice(3);
    const myRanking = sortedData.find(item => item.isMe);

    const renderValue = (item: RankingProps) =>
        mode === "distance" ? `${item.distance.toFixed(1)}km` : `${item.time}시간`;

    return (
        <div className="container">
            <div className="header">
                <Link to={"/"} className="tab">
                    <img className="logo" src={logo} alt="로고" />
                </Link>
                <div className="tab">
                    <img className="setting" src={setting} alt="설정" />
                </div>
            </div>
            <div className="r_header">
                <div className="tabs">
                    <div
                        className={`tab ${mode === "distance" ? "active" : ""}`}
                        onClick={() => setMode("distance")}
                    >
                        거리
                        <div className="tab-underline" />
                    </div>
                    <div
                        className={`tab ${mode === "time" ? "active" : ""}`}
                        onClick={() => setMode("time")}
                    >
                        시간
                        <div className="tab-underline" />
                    </div>
                </div>
            </div>

            <div className="top3">
                {[top3[1], top3[0], top3[2]].map((item, i) => {
                    if (!item) return null;
                    const rank = i === 0 ? 2 : i === 1 ? 1 : 3;
                    const offsetY = rank === 1 ? "-12px" : "8px";
                    return (
                        <div
                            key={item.id}
                            className="rank"
                            style={{ transform: `translateY(${offsetY})` }}
                        >
                            <div className="avatar">
                                <div className={`badge badge-${rank}`}>{rank}</div>
                                <img
                                    src={guest}
                                    alt="게스트"
                                    onError={(e) => {
                                        const target = e.currentTarget as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = guest;
                                    }}
                                />
                            </div>
                            <div className="name">{item.id}</div>
                            <div className="value">{renderValue(item)}</div>
                        </div>
                    );
                })}
            </div>

            <div className="list">
                {myRanking && <RankingItem item={myRanking} renderValue={renderValue} />}
                {sortedData.map((item) => (
                    <RankingItem key={item.id} item={item} renderValue={renderValue} />
                ))}
            </div>
        </div>
    );
};

export default Ranking;
