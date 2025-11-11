import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/GoWalk-Web/src/pages/member/styles/styles.ts";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react"
import plus from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/GoWalk-Web/src/img/plus.png"
import minus from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/GoWalk-Web/src/img/minus.png"
const Member_petage=()=>{
    const [value,setValue]=useState(0);
    const onClickPlus=()=>{
        setValue(value+1);
    }
    const onClickMinus=()=>{
        if(value>0){
            setValue(value-1);
        }
    }
    return(
        <>
        <S.Title>반려견 정보</S.Title>
        <S.InputFormtitle>반려견 몸무게</S.InputFormtitle>
        <S.Div>
            <S.Minus src={minus} alt="" onClick={onClickMinus}></S.Minus>
            <S.BodyCover>
            <S.Body>{value}kg</S.Body>
            </S.BodyCover>
            <S.Plus src={plus} alt="" onClick={onClickPlus}></S.Plus>
        </S.Div>
        <S.ErrorCover>
        <S.Errortext></S.Errortext>
        </S.ErrorCover>
        <S.Button>다음</S.Button>
        <Link to="/member_petage"><S.Before>이전으로</S.Before></Link>
        </>
    )
}

export default Member_petage;