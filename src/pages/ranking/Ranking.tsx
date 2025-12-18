import React, {useEffect, useState} from "react";
import "./styles/Ranking.css";
import "../home/styles/Home.css";
import guest from "./images/guest.png";
import RankingItem from "./components/RankingItem.tsx";
import logo from "../home/images/산책가자.png";
import setting from "../home/images/Vector.png";
import {Link} from "react-router";
import {fetchDistanceRanking, fetchTimeRanking} from "@/pages/ranking/api/fetchTimeRanking.ts";
import {useAtomValue} from "jotai/index";
import {userAtom} from "@/atoms/atoms.ts";
import {Ranking} from "@/pages/ranking/types/Ranking_type.tsx";
import Loading from "@/widgets/loading/Loading.tsx";

const Ranking: React.FC = () => {
    const user = useAtomValue(userAtom);
    const [mode, setMode] = useState<"distance" | "time">("distance");
    const [rankingData, setRankingData] = useState<Ranking[]>();

    const fetchRankingData = async () => {
        let data;
        if(mode == "time") {
            data = await fetchTimeRanking();
        } else {
            data = await fetchDistanceRanking();
        }
        data = data.map((u) => {
            if(u.username == user.username) {
                return {
                    ...u,
                    isMe: true
                }
            } else {
                return {
                    ...u,
                    isMe: false
                }
            }
        })
        setRankingData(data);
    }

    useEffect(() => {
        if(user){
            fetchRankingData();
        }
    }, [user, mode]);
    if(user == null || rankingData == null) return (
        <div className="container">
            <Loading />
        </div>
    );

    const sortedData = [...rankingData].sort((a, b) =>
        mode === "distance" ? b.walkDistance - a.walkDistance : b.walkDay - a.walkDay
    ).map((d, i) => ({...d, rank: i+1}));

    const top3 = sortedData.slice(0, 3);
    while(top3.length < 3) {
        top3.push({
            username: "-",
            walkDistance: 0,
            walkDay: 0,
            isMe: false,
            rank: 0
        })
    }
    const myRanking = sortedData.find(item => item.isMe);

    const renderValue = (item: Ranking) =>
        mode === "distance" ? `${item.walkDistance.toFixed(1)}km` : `${item.walkDay}일`;

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
                    const rank = i == 0 ? 2 : i == 1 ? 1 : 3;
                    const offsetY = rank === 1 ? "-12px" : "8px";
                    return (
                        <div
                            key={i}
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
                            <div className="name">{item.username}</div>
                            <div className="value">{renderValue(item)}</div>
                        </div>
                    );
                })}
            </div>

            <div className="list">
                {myRanking && <RankingItem item={myRanking} renderValue={renderValue} />}
                {sortedData.map((item) => (
                    <RankingItem key={item.username} item={item} renderValue={renderValue} />
                ))}
            </div>
        </div>
    );
};

export default Ranking;
