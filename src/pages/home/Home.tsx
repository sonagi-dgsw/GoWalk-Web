// import React, { useState } from "react";
import "./styles/Home.css";
import logo from "./images/산책가자.png";
import setting from "./images/Vector.png";
import dog from "./images/dog.png";
import { HomeProps } from "./types/Home_type";

const dogInfo:HomeProps = {
  dogName: "뽀삐 ",
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
            <div className="tab">
                <img className="logo" src={logo} alt="로고" />
            </div>
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
                <div className="dog_breed">견종  {dogInfo.dogBreed}</div>
                <div className="dog_age">나이  {dogInfo.dogAge}살</div>
                <div className="dog_weight">체중  {dogInfo.dogWeight}kg</div>
            </div>
        </div>
    </div>
  );
};

export default Home;
