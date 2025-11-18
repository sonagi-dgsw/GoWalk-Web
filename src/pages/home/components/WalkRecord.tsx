import React from "react";
import "../styles/WalkRecord.css";
import checkIcon from "../images/check.png";

interface DayRecord {
  day: number;
  minutes: number;
  distance: number;
  active: boolean;
}

const weekData: DayRecord[] = [
  { day: 5, minutes: 0, distance: 0, active: false },
  { day: 6, minutes: 0, distance: 0, active: false },
  { day: 7, minutes: 0, distance: 0, active: false },
  { day: 8, minutes: 0, distance: 0, active: false },
  { day: 9, minutes: 51, distance: 4.1, active: true },
  { day: 10, minutes: 38, distance: 3.0, active: true },
  { day: 11, minutes: 49, distance: 3.7, active: true },
];

const WalkRecord: React.FC = () => {
  return (
    <div className="walk-record">
      <h3 className="walk-title">이번 주 산책기록</h3>
      <div className="days">
        {weekData.map((item) => (
          <div
            key={item.day}
            className={`day ${item.active ? "active" : "inactive"}`}
          >
            <div className={`circle ${item.active ? "check" : ""}`}>
              {item.active ? (<img src={checkIcon} alt="체크" className="check-icon" />) : item.day}
            </div>
            <div className="time">{item.minutes}분</div>
            <div className="distance">({item.distance}km)</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalkRecord;
