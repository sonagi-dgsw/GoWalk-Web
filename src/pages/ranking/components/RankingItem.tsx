import guest from "../images/guest.png";
import React from "react";
import {Ranking} from "@/pages/ranking/types/Ranking_type.tsx";

interface IRankingItemProps {
    item: Ranking;
    renderValue: (item: Ranking) => string;
}

const RankingItem: React.FC<IRankingItemProps> = ({item, renderValue}) => {
    return (
        <div className={`list-item ${item.isMe && "me"}`}>
            <div className="info">
                {item.isMe && <div className="me-indicator" />}
                <h3 className="rank_number">{item.rank}</h3>
                <div className="avatar">
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
                <div className="info-text">
                    <div className="name">{item.username}</div>
                    <div className="meta">{item.username}</div>
                </div>
            </div>
            <div className="value">{renderValue(item)}</div>
        </div>
    )
}

export default RankingItem;