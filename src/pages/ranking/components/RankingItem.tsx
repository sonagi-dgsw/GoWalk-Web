import guest from "../images/guest.png";
import React from "react";
import {RankingProps} from "../types/Ranking_type.tsx";

interface IRankingItemProps {
    item: RankingProps;
    renderValue: (item: RankingProps) => string;
}

const RankingItem: React.FC<IRankingItemProps> = ({item, renderValue}) => {
    return (
        <div className={`list-item ${item.isMe && "me"}`}>
            <div className="info">
                {item.isMe && <div className="me-indicator" />}
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
                    <div className="name">{item.id}</div>
                    <div className="meta">{item.name}</div>
                </div>
            </div>
            <div className="value">{renderValue(item)}</div>
        </div>
    )
}

export default RankingItem;