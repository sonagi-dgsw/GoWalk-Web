import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/GoWalk-Web/src/pages/member/styles/styles.ts";
import { Link } from "react-router";
import { useState } from "react";
const Member_gender=()=>{
    const [clickmale,setClickmale]=useState(false);
    const [clickfemale,setClickfemale]=useState(false);
    const onClickMale=()=>{
        setClickmale(true);
        setClickfemale(false);
    }
    const onClickFemale=()=>{
        setClickfemale(true);
        setClickmale(false);
    }
    const onSubmit=(e:any)=>{
        if (clickmale===false && clickfemale===false){
            e.preventDefault();
        }
    }
    return(
        <form onSubmit={onSubmit}>
        <S.Title>반려견 정보</S.Title>
        <S.InputFormtitle>성별</S.InputFormtitle>
        <S.GenderCover>
            <S.GenderBackground onClick={onClickMale} style={clickmale ? {backgroundColor:"#85CCFF"}:{}}>
                <S.Gender src={clickmale ? "src/img/onclickmale.png":"src/img/male.png"}></S.Gender>
                <S.GenderText style={clickmale ? {color: "white"} : {}}>수컷</S.GenderText>
            </S.GenderBackground>
            <S.GenderBackground onClick={onClickFemale} style={clickfemale ? {backgroundColor:"#ECB3FF"}:{}}>
                <S.Gender src={clickfemale ? "src/img/onclickfemale.png":"src/img/female.png"} style={{height:"39px"}}></S.Gender>
                <S.GenderText style={clickfemale ? {color: "white"} : {}}>암컷</S.GenderText>
            </S.GenderBackground>
        </S.GenderCover>
        <S.Button type="submit">완료</S.Button>
        <Link to="/member_petweight"><S.Before>이전으로</S.Before></Link>
        </form>
    )
}

export default Member_gender