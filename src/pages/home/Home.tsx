// import React, { useState } from "react";
import "./styles/Home.css";
import logo from "./images/산책가자.png";
import setting from "./images/Vector.png";
import dog from "./images/dog.png";
import {HomeProps, IProfileApiResponse} from "./types/Home_type";
import breed from "./images/emoji/species.png";
import age from "./images/emoji/age.png";
import weight from "./images/emoji/weight.png";
import {Link} from "react-router";

import React, {useEffect, useState} from "react";
import WalkRecord from "./components/WalkRecord";
import {useAtomValue} from "jotai";
import {userAtom} from "@/atoms/atoms.ts";
import goWalkAxios from "@/axios/GoWalkAxios.ts";

const dogInfo:HomeProps = {
  dogName: "뽀삐",
  guardianName: "권대형",
  dogGender: true,
  dogBreed: "웰시코기",
  dogAge: 4,
  dogWeight: 12,
  dayWalkTime: 49,
  dayWalkDistance: 3.7,
  useKcal: 300,
  consecutiveDays: 8,
};

const Home: React.FC = () => {
    const [profile, setProfile] = useState<IProfileApiResponse>();
    const user = useAtomValue(userAtom);
    useEffect(() => {
        goWalkAxios.get<IProfileApiResponse>("/api/members/profile").then((profileRes) => {
            setProfile(profileRes.data);
        });
    }, [])

    if(user == null || profile == null) return null;
    const dogGender = user.petGender == "MALE" ? "♂" : "♀";
  return (
    <div className="container">
        <div className="header">
            <Link to={"/"} className="tab">
                <img className="logo" src={logo} alt="로고" />
            </Link>
            <Link to={"/setting"} className="tab">
                <img className="setting" src={setting} alt="설정" />
            </Link>
        </div>
        <div className="dog_info">
            <img className="dog_img" src={dog} alt="강아지 사진" />
            <div className="dog_text">
                <div className="dog_name">
                    {user.petName}<div className="dog_gender">{dogGender}</div>
                    <div className="guardian_name" >
                        (보호자 {user.username})
                    </div>
                </div>
                <div className="dog_breed"><img src={breed} alt="견종 이모지" />견종  {user.breed}</div>
                <div className="dog_age"><img src={age} alt="나이" />나이  {user.breedAge}살</div>
                <div className="dog_weight"><img src={weight} alt="체중" />체중  {user.petWeight}kg</div>
            </div>
        </div>
        <div className="bottom_box">
            <div className="today">
                <div className="timebox">
                    <div className="today_text">오늘 산책한 시간</div>
                    <div className="time">{profile.data.walkDay} 분</div>
                </div>
                <div className="distancebox">
                    <div className="today_text">오늘 산책한 거리</div>
                    <div className="distance">{profile.data.walkDistance} km</div>
                </div>
                <div className="kcalbox">
                    <div className="today_text">소모한 칼로리</div>
                    <div className="kcal">{dogInfo.useKcal} kcal</div>
                </div>
            </div>
            <div className="consecutive_days_box">
                <div className="consecutive_days">{dogInfo.consecutiveDays} 일</div>
                <div className="consecutive_days_text">연속으로 산책했어요</div>
            </div>
        </div>
        <div className="walk_button">
            <Link to={"/walk/start"} className="button">산책하기</Link>
        </div>
        <div className="week_record">
            <WalkRecord />
        </div>
    </div>
  );
};

export default Home;
