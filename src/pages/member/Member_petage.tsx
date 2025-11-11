import * as S from "./styles/styles.ts";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react"
import plus from "../../img/plus.png"
import minus from "../../img/minus.png"
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
    const navigate=useNavigate();
    const onSubmit=(e:any)=>{
        if (value>0) {
            navigate("/member_petweight")
        }
        else{
            e.preventDefault();
        }
    }
    return(
        <form onSubmit={onSubmit}>
        <S.Title>반려견 정보</S.Title>
        <S.InputFormtitle>견종</S.InputFormtitle>
        <S.Div>
            <S.Minus src={minus} alt="" onClick={onClickMinus}></S.Minus>
            <S.BodyCover>
            <S.Body>{value}세</S.Body>
            </S.BodyCover>
            <S.Plus src={plus} alt="" onClick={onClickPlus}></S.Plus>
        </S.Div>
        <S.ErrorCover>
        <S.Errortext></S.Errortext>
        </S.ErrorCover>
        <S.Button type="submit">다음</S.Button>
        <Link to="/member_petsort"><S.Before>이전으로</S.Before></Link>
        </form>
    )
}

export default Member_petage;