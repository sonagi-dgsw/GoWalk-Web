// import React, { useState } from "react";
import "./styles/Home.css";
import logo from "./images/산책가자.png";
import setting from "./images/Vector.png";
import dog from "./images/dog.png";
import { HomeProps } from "./types/Home_type";
import breed from "./images/emoji/species.png";
import age from "./images/emoji/age.png";
import weight from "./images/emoji/weight.png";
import {Link} from "react-router";


const dogInfo:HomeProps = {
  dogName: "뽀삐",
  guardianName: "권대형",
  dogGender: true,
  dogBreed: "웰시코기",
  dogAge: 4,
  dogWeight: 12,
};

const Home: React.FC = () => {

    const dogGender = dogInfo.dogGender ? "♂" : "♀";

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
        <div className="dog_info">
            <img className="dog_img" src={dog} alt="강아지 사진" />
            <div className="dog_text">
                <div className="dog_name">
                    {dogInfo.dogName}{dogGender}
                    <div className="guardian_name" >
                        (보호자 {dogInfo.guardianName})
                    </div>
                </div>
                <div className="dog_breed"><img src={breed} alt="견종 이모지" />견종  {dogInfo.dogBreed}</div>
                <div className="dog_age"><img src={age} alt="나이" />나이  {dogInfo.dogAge}살</div>
                <div className="dog_weight"><img src={weight} alt="체중" />체중  {dogInfo.dogWeight}kg</div>
            </div>
        </div>
    </div>
  );
};

export default Home;
